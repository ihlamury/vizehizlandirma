"use client";

import { ClipboardList, Send, Cog, CalendarCheck } from "lucide-react";
import { FadeIn } from "@/components/fade-in";

const steps = [
  {
    icon: ClipboardList,
    step: "1",
    title: "Hizmet Seçin",
    description: "İhtiyacınız olan hizmetleri seçin ve başvuru formunu doldurun.",
  },
  {
    icon: Send,
    step: "2",
    title: "Bilgilerinizi Gönderin",
    description: "Pasaport ve gerekli belgelerinizi güvenli şekilde bize iletin.",
  },
  {
    icon: Cog,
    step: "3",
    title: "Biz Halledelim",
    description: "Uzman ekibimiz tüm işlemleri sizin adınıza gerçekleştirir.",
  },
  {
    icon: CalendarCheck,
    step: "4",
    title: "Randevunuza Gidin",
    description: "Size uygun randevu tarihi ile konsolosluğa gidin.",
  },
];

export function HowItWorks() {
  return (
    <section id="nasil-calisir" className="bg-secondary py-16 md:py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">
              Nasıl Çalışır?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              4 basit adımda vize randevunuzu hızlandırın
            </p>
          </div>
        </FadeIn>

        {/* Steps */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connector Line - Desktop Only */}
            <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-primary/20" />
            
            {steps.map((step, index) => (
              <FadeIn key={index} delay={index * 100}>
                <div className="relative text-center">
                  {/* Icon Circle */}
                  <div className="relative inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-md border-2 border-primary/20 mb-4 z-10">
                    <step.icon className="w-7 h-7 text-accent" />
                    {/* Step Number */}
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-accent text-white text-xs font-bold rounded-full flex items-center justify-center shadow-sm">
                      {step.step}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}