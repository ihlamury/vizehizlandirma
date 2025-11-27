import { Shield, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-6">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold">Vize Hızlandırma</span>
          </div>

          {/* Quick Links */}
          <nav className="flex flex-wrap gap-6 text-sm">
            <a href="#hizmetler" className="text-white/70 hover:text-white transition-colors">
              Hizmetler
            </a>
            <a href="#nasil-calisir" className="text-white/70 hover:text-white transition-colors">
              Nasıl Çalışır
            </a>
            <a href="#sss" className="text-white/70 hover:text-white transition-colors">
              SSS
            </a>
            <a href="#iletisim" className="text-white/70 hover:text-white transition-colors">
              İletişim
            </a>
          </nav>

          {/* Email */}
          <a 
            href="mailto:info@vizehizlandirma.com" 
            className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
          >
            <Mail className="w-4 h-4" />
            info@vizehizlandirma.com
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50">
          <p>© {currentYear} Vize Hızlandırma. Tüm hakları saklıdır.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">
              Gizlilik Politikası
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Kullanım Şartları
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}