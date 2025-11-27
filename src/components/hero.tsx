"use client";

import { Button } from "@/components/ui/button";
import { Shield, Clock, FileCheck } from "lucide-react";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
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

  return (
    <section className="bg-primary text-white">
      <div className="container mx-auto px-4 py-20 md:py-28">
        <div className="max-w-3xl mx-auto text-center">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-8">
            <Shield className="w-4 h-4" />
            <span className="text-sm">Güvenilir Vize Danışmanlık Hizmeti</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Amerika Vize Randevunuzu{" "}
            <span className="text-amber-300">Hızlandırıyoruz</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            DS-160 form doldurma, hesap oluşturma ve randevu öne çekme
            hizmetleriyle vize sürecinizi kolaylaştırıyoruz.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              onClick={() => scrollToSection("iletisim")}
              className="bg-white text-primary hover:bg-blue-50 font-semibold px-8"
            >
              Hemen Başlayın
            </Button>
            <Button
              size="lg"
              onClick={() => scrollToSection("hizmetler")}
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold px-8"
            >
              Fiyatları İncele
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Clock className="w-6 h-6 text-amber-300" />
              </div>
              <p className="text-2xl font-bold">7/24</p>
              <p className="text-sm text-white/80">Otomatik Takip</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <FileCheck className="w-6 h-6 text-amber-300" />
              </div>
              <p className="text-2xl font-bold">500+</p>
              <p className="text-sm text-white/80">Mutlu Müşteri</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Shield className="w-6 h-6 text-amber-300" />
              </div>
              <p className="text-2xl font-bold">%100</p>
              <p className="text-sm text-white/80">Güvenli</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}