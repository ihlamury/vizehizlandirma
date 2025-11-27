import { FileWarning, UserX, CalendarClock } from "lucide-react";

const problems = [
  {
    icon: FileWarning,
    title: "DS-160 Formu Karmaşık",
    description:
      "Onlarca sayfa, İngilizce sorular ve teknik terimler. Küçük bir hata başvurunuzun reddine yol açabilir.",
  },
  {
    icon: UserX,
    title: "Hesap Oluşturma Güçlüğü",
    description:
      "USVisaScheduling sisteminde hesap açmak ve ödeme yapmak kafa karıştırıcı bir süreç.",
  },
  {
    icon: CalendarClock,
    title: "Randevular Çok Uzak",
    description:
      "Mevcut randevu tarihleri 12-18 ay sonrasına veriliyor. Seyahat planlarınız aksıyor.",
  },
];

export function Problems() {
  return (
    <section className="bg-secondary py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Vize Başvurusunda Karşılaşılan Zorluklar
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Amerika vizesi almak isteyen binlerce kişi bu sorunlarla karşılaşıyor.
            Siz de bunlardan birini yaşıyor olabilirsiniz.
          </p>
        </div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-amber-50 rounded-lg flex items-center justify-center mb-4">
                <problem.icon className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">
                {problem.title}
              </h3>
              <p className="text-muted-foreground">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}