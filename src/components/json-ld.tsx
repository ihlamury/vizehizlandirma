export function JsonLd() {
    const structuredData = {
      "@context": "https://schema.org",
      "@graph": [
        // Organization
        {
          "@type": "Organization",
          "@id": "https://vizehizlandirma.com/#organization",
          name: "Vize Hızlandırma",
          url: "https://vizehizlandirma.com",
          logo: {
            "@type": "ImageObject",
            url: "https://vizehizlandirma.com/logo.png",
          },
          contactPoint: {
            "@type": "ContactPoint",
            email: "info@vizehizlandirma.com",
            contactType: "customer service",
            availableLanguage: "Turkish",
          },
          sameAs: [],
        },
        // Website
        {
          "@type": "WebSite",
          "@id": "https://vizehizlandirma.com/#website",
          url: "https://vizehizlandirma.com",
          name: "Vize Hızlandırma",
          publisher: {
            "@id": "https://vizehizlandirma.com/#organization",
          },
          inLanguage: "tr-TR",
        },
        // Service - DS-160
        {
          "@type": "Service",
          "@id": "https://vizehizlandirma.com/#ds160",
          name: "DS-160 Form Doldurma",
          description: "Amerika vize başvurusu için DS-160 formunuzu Türkçe açıklamalar ile hatasız dolduruyoruz.",
          provider: {
            "@id": "https://vizehizlandirma.com/#organization",
          },
          areaServed: {
            "@type": "Country",
            name: "Turkey",
          },
          offers: {
            "@type": "Offer",
            price: "2500",
            priceCurrency: "TRY",
          },
        },
        // Service - Account Creation
        {
          "@type": "Service",
          "@id": "https://vizehizlandirma.com/#account",
          name: "Hesap Oluşturma",
          description: "USVisaScheduling sisteminde hesap açma ve ilk randevu alma hizmeti.",
          provider: {
            "@id": "https://vizehizlandirma.com/#organization",
          },
          areaServed: {
            "@type": "Country",
            name: "Turkey",
          },
          offers: {
            "@type": "Offer",
            price: "2500",
            priceCurrency: "TRY",
          },
        },
        // Service - Appointment Expedition
        {
          "@type": "Service",
          "@id": "https://vizehizlandirma.com/#expedition",
          name: "Randevu Hızlandırma",
          description: "7/24 otomatik tarama ile Amerika vize randevunuzu erkene çekiyoruz.",
          provider: {
            "@id": "https://vizehizlandirma.com/#organization",
          },
          areaServed: {
            "@type": "Country",
            name: "Turkey",
          },
          offers: {
            "@type": "Offer",
            price: "4000",
            priceCurrency: "TRY",
          },
        },
        // FAQ Page
        {
          "@type": "FAQPage",
          "@id": "https://vizehizlandirma.com/#faq",
          mainEntity: [
            {
              "@type": "Question",
              name: "Güvenilir misiniz? Bilgilerim güvende mi?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Evet, tamamen güvenilir bir hizmet sunuyoruz. Tüm kişisel bilgileriniz şifreli olarak saklanır ve sadece vize işlemleriniz için kullanılır. İşlem tamamlandıktan sonra belgeleriniz sistemimizden silinir. Yasal bir danışmanlık firması olarak fatura kesiyoruz.",
              },
            },
            {
              "@type": "Question",
              name: "Randevu ne kadar sürede bulunur?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Randevu bulma süresi konsolosluk yoğunluğuna göre değişir. Genellikle 1 kişi için 0-10 gün, 2 kişi için 0-2 hafta, 3 kişi için 0-3 hafta, 4 kişi için 0-1 ay içinde erken randevu buluyoruz.",
              },
            },
            {
              "@type": "Question",
              name: "Hangi belgeler gerekli?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "DS-160 hizmeti için: pasaport bilgileri, fotoğraf, seyahat planı ve kişisel bilgiler. Hesap oluşturma için: pasaport ve ödeme bilgileri. Randevu hızlandırma için: mevcut USVisaScheduling hesap bilgileriniz yeterlidir.",
              },
            },
            {
              "@type": "Question",
              name: "Hangi şehirlerde hizmet veriyorsunuz?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "İstanbul ve Ankara konsolosluklarında hizmet veriyoruz. Her iki lokasyon için de randevu hızlandırma işlemi yapabiliyoruz.",
              },
            },
          ],
        },
      ],
    };
  
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    );
  }