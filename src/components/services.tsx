"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, FileText, UserPlus, Zap } from "lucide-react";

type ServiceId = "ds160" | "account" | "expedition";

interface Service {
  id: ServiceId;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  price: number;
  features: string[];
}

const services: Service[] = [
  {
    id: "ds160",
    icon: FileText,
    title: "DS-160 Form Doldurma",
    price: 2500,
    features: [
      "Türkçe açıklamalar",
      "Hatasız doldurma garantisi",
      "Belge kontrolü",
    ],
  },
  {
    id: "account",
    icon: UserPlus,
    title: "Hesap Oluşturma",
    price: 2500,
    features: [
      "Hesap açma işlemleri",
      "Ödeme rehberliği",
      "İlk randevu alma",
    ],
  },
  {
    id: "expedition",
    icon: Zap,
    title: "Randevu Hızlandırma",
    price: 4000,
    features: [
      "7/24 otomatik tarama",
      "Anında bildirim",
      "Otomatik değişiklik",
    ],
  },
];

function calculatePrice(selectedServices: ServiceId[]): { total: number; discount: number; originalTotal: number } {
  const count = selectedServices.length;
  const originalTotal = selectedServices.reduce((sum, id) => {
    const service = services.find((s) => s.id === id);
    return sum + (service?.price || 0);
  }, 0);

  if (count === 3) {
    return { total: 6000, discount: originalTotal - 6000, originalTotal };
  } else if (count === 2) {
    return { total: 5000, discount: originalTotal - 5000, originalTotal };
  }
  return { total: originalTotal, discount: 0, originalTotal };
}

export function Services() {
  const [selectedServices, setSelectedServices] = useState<ServiceId[]>([]);

  const toggleService = (id: ServiceId) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const scrollToContact = () => {
    // Build selected services text
    const selectedTitles = selectedServices
      .map((id) => services.find((s) => s.id === id)?.title)
      .filter(Boolean)
      .join(", ");
    
    const { total } = calculatePrice(selectedServices);

    // Store selection in sessionStorage for the contact form to read
    sessionStorage.setItem("selectedServices", selectedTitles);
    sessionStorage.setItem("selectedTotal", total.toLocaleString("tr-TR"));

    // Dispatch custom event to notify contact form
    window.dispatchEvent(new Event("servicesSelected"));

    const element = document.getElementById("iletisim");
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const { total, discount, originalTotal } = calculatePrice(selectedServices);

  return (
    <section id="hizmetler" className="bg-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">
            Hizmetlerimiz ve Fiyatlar
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
            İhtiyacınıza göre hizmet seçin. Çoklu seçimde otomatik indirim!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Service Cards Row */}
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {services.map((service) => {
              const isSelected = selectedServices.includes(service.id);
              return (
                <Card
                  key={service.id}
                  className={`relative p-4 cursor-pointer transition-all ${
                    isSelected
                      ? "border-2 border-accent ring-2 ring-accent/20"
                      : "border border-border hover:border-accent/50"
                  }`}
                  onClick={() => toggleService(service.id)}
                >
                  {/* Selection Indicator */}
                  <div
                    className={`absolute top-3 right-3 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                      isSelected
                        ? "bg-accent border-accent"
                        : "border-muted-foreground/30"
                    }`}
                  >
                    {isSelected && <Check className="w-3 h-3 text-white" />}
                  </div>

                  {/* Icon */}
                  <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center mb-3">
                    <service.icon className="w-5 h-5 text-primary" />
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-semibold text-primary mb-1 pr-6">
                    {service.title}
                  </h3>

                  {/* Price */}
                  <p className="text-2xl font-bold text-primary mb-3">
                    ₺{service.price.toLocaleString("tr-TR")}
                  </p>

                  {/* Features */}
                  <ul className="space-y-1.5">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>

          {/* Summary Bar */}
          <Card className="p-4 bg-secondary border-0">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              {/* Left: Selection Info */}
              <div className="flex-1">
                {selectedServices.length === 0 ? (
                  <p className="text-muted-foreground text-sm">
                    👆 Yukarıdan hizmet seçin
                  </p>
                ) : (
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-sm text-muted-foreground">Seçilen:</span>
                    {selectedServices.map((id) => {
                      const service = services.find((s) => s.id === id);
                      return (
                        <span
                          key={id}
                          className="inline-flex items-center bg-white px-2 py-1 rounded text-xs font-medium text-primary"
                        >
                          {service?.title}
                        </span>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Right: Price & CTA */}
              <div className="flex items-center gap-4">
                {selectedServices.length > 0 && (
                  <div className="text-right">
                    {discount > 0 && (
                      <div className="text-xs text-green-600 font-medium">
                        ₺{discount.toLocaleString("tr-TR")} tasarruf!
                      </div>
                    )}
                    <div className="flex items-center gap-2">
                      {discount > 0 && (
                        <span className="text-sm text-muted-foreground line-through">
                          ₺{originalTotal.toLocaleString("tr-TR")}
                        </span>
                      )}
                      <span className="text-2xl font-bold text-primary">
                        ₺{total.toLocaleString("tr-TR")}
                      </span>
                    </div>
                  </div>
                )}
                <Button
                  onClick={scrollToContact}
                  className="bg-accent hover:bg-accent/90 text-white font-semibold px-6"
                  disabled={selectedServices.length === 0}
                >
                  Hemen Başvur
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}