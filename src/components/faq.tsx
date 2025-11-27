"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FadeIn } from "@/components/fade-in";

const faqs = [
  {
    question: "Güvenilir misiniz? Bilgilerim güvende mi?",
    answer:
      "Evet, tamamen güvenilir bir hizmet sunuyoruz. Tüm kişisel bilgileriniz şifreli olarak saklanır ve sadece vize işlemleriniz için kullanılır. İşlem tamamlandıktan sonra belgeleriniz sistemimizden silinir.",
  },
  {
    question: "Randevu ne kadar sürede bulunur?",
    answer:
      "Randevu bulma süresi konsolosluk yoğunluğuna göre değişir. Genellikle 1 kişi için 0-10 gün, 2 kişi için 0-2 hafta, 3 kişi için 0-3 hafta, 4 kişi için 0-1 ay içinde erken randevu buluyoruz. Sistemimiz 7/24 otomatik olarak uygun tarihleri tarar.",
  },
  {
    question: "Hangi belgeler gerekli?",
    answer:
      "DS-160 hizmeti için: pasaport bilgileri, fotoğraf, seyahat planı ve kişisel bilgiler. Hesap oluşturma için: pasaport ve ödeme bilgileri. Randevu hızlandırma için: mevcut USVisaScheduling hesap bilgileriniz yeterlidir.",
  },
  {
    question: "Ödeme nasıl yapılır?",
    answer:
      "Kredi kartı, banka kartı veya havale/EFT ile ödeme yapabilirsiniz. Ödeme sonrası fatura e-posta adresinize gönderilir. Taksit seçenekleri için bizimle iletişime geçebilirsiniz.",
  },
  {
    question: "İade politikanız nedir?",
    answer:
      "DS-160 ve hesap oluşturma hizmetlerinde işlem başladıktan sonra iade yapılmamaktadır. Randevu hızlandırma hizmetinde, 30 gün içinde randevu bulunamazsa ücretin %50'si iade edilir. Detaylı bilgi için sözleşmemizi inceleyebilirsiniz.",
  },
  {
    question: "Hangi şehirlerde hizmet veriyorsunuz?",
    answer:
      "İstanbul ve Ankara konsolosluklarında hizmet veriyoruz. Her iki lokasyon için de randevu hızlandırma işlemi yapabiliyoruz. Tercih ettiğiniz konsolosluğu başvuru sırasında belirtmeniz yeterlidir.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="sss" className="bg-white py-16 md:py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <FadeIn>
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">
              Sıkça Sorulan Sorular
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Merak ettiğiniz soruların cevapları
            </p>
          </div>
        </FadeIn>

        {/* FAQ Items */}
        <FadeIn>
          <div className="max-w-2xl mx-auto space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`rounded-lg overflow-hidden transition-all ${
                    isOpen 
                      ? "bg-primary text-white shadow-lg" 
                      : "bg-secondary hover:bg-secondary/80 border-2 border-transparent hover:border-primary/20"
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between p-5 text-left"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <span className={`font-semibold pr-4 ${isOpen ? "text-white" : "text-primary"}`}>
                      {faq.question}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        isOpen 
                          ? "bg-white/20" 
                          : "bg-primary text-white"
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="w-5 h-5" />
                      ) : (
                        <Plus className="w-5 h-5" />
                      )}
                    </div>
                  </button>
                  {isOpen && (
                    <div 
                      id={`faq-answer-${index}`}
                      className="px-5 pb-5"
                    >
                      <p className="text-white/90 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}