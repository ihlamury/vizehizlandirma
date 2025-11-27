"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Send, CheckCircle, AlertCircle } from "lucide-react";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xyzqwoab", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSubmitStatus("success");
        form.reset();
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="iletisim" className="bg-secondary py-12 md:py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">
            Bize Ulaşın
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Sorularınız mı var? Hemen bizimle iletişime geçin.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Left: Contact Info */}
          <div className="bg-primary rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">İletişim Bilgileri</h3>
            
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold mb-1">E-posta</p>
                  <a 
                    href="mailto:info@vizehizlandirma.com" 
                    className="text-white/90 hover:text-white underline underline-offset-2"
                  >
                    info@vizehizlandirma.com
                  </a>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-white/10 rounded-lg p-4 mt-8">
                <p className="text-sm text-white/90">
                  <strong>Yanıt Süresi:</strong> Genellikle 24 saat içinde tüm mesajlara dönüş yapıyoruz.
                </p>
              </div>
            </div>

            {/* Trust indicators */}
            <div className="mt-8 pt-6 border-t border-white/20">
              <p className="text-sm text-white/80 mb-3">Neden bizi tercih etmelisiniz?</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-300" />
                  <span>Güvenilir ve yasal hizmet</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-300" />
                  <span>7/24 otomatik randevu tarama</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-300" />
                  <span>500+ mutlu müşteri</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h3 className="text-xl font-bold text-primary mb-6">Mesaj Gönderin</h3>

            {submitStatus === "success" ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-lg font-semibold text-primary mb-2">
                  Mesajınız Gönderildi!
                </h4>
                <p className="text-slate-600 text-sm">
                  En kısa sürede size dönüş yapacağız.
                </p>
                <Button
                  onClick={() => setSubmitStatus("idle")}
                  variant="outline"
                  className="mt-4"
                >
                  Yeni Mesaj Gönder
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <Label htmlFor="name" className="text-primary font-medium">
                    Adınız Soyadınız *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Ahmet Yılmaz"
                    className="mt-1.5 border-2 border-slate-200 focus:border-accent"
                  />
                </div>

                {/* Email */}
                <div>
                  <Label htmlFor="email" className="text-primary font-medium">
                    E-posta Adresiniz *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="ahmet@email.com"
                    className="mt-1.5 border-2 border-slate-200 focus:border-accent"
                  />
                </div>

                {/* Phone */}
                <div>
                  <Label htmlFor="phone" className="text-primary font-medium">
                    Telefon Numaranız
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="0532 123 45 67"
                    className="mt-1.5 border-2 border-slate-200 focus:border-accent"
                  />
                </div>

                {/* Message */}
                <div>
                  <Label htmlFor="message" className="text-primary font-medium">
                    Mesajınız *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Hangi hizmetlerle ilgileniyorsunuz? Sorularınız neler?"
                    className="mt-1.5 border-2 border-slate-200 focus:border-accent resize-none"
                  />
                </div>

                {/* Error Message */}
                {submitStatus === "error" && (
                  <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg">
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    <p className="text-sm">
                      Mesaj gönderilemedi. Lütfen tekrar deneyin veya e-posta ile ulaşın.
                    </p>
                  </div>
                )}

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent hover:bg-accent/90 text-white font-semibold py-5"
                >
                  {isSubmitting ? (
                    "Gönderiliyor..."
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Mesaj Gönder
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}