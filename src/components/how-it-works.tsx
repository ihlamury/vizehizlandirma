import { ClipboardList, Send, Cog, CalendarCheck } from "lucide-react";

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
    <section id="nasil-calisir" className="bg-secondary py-12 md:py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">
            Nasıl Çalışır?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            4 basit adımda vize randevunuzu hızlandırın
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center">
                {/* Connector Line - hidden on mobile, shown on desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-[2px] bg-border" />
                )}

                {/* Icon Circle */}
                <div className="relative inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-sm border border-border mb-4">
                  <step.icon className="w-7 h-7 text-accent" />
                  {/* Step Number */}
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-accent text-white text-xs font-bold rounded-full flex items-center justify-center">
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}