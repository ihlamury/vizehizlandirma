"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Shield } from "lucide-react";

const navLinks = [
  { href: "hizmetler", label: "Hizmetler" },
  { href: "nasil-calisir", label: "Nasıl Çalışır" },
  { href: "sss", label: "SSS" },
  { href: "iletisim", label: "İletişim" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md py-3"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2"
          >
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
              isScrolled ? "bg-primary" : "bg-white/10"
            }`}>
              <Shield className="w-6 h-6 text-white" />
            </div>
            <span className={`font-bold text-lg ${
              isScrolled ? "text-primary" : "text-white"
            }`}>
              Vize Hızlandırma
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`font-medium transition-colors ${
                  isScrolled
                    ? "text-slate-600 hover:text-primary"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("iletisim")}
              className={`font-semibold ${
                isScrolled
                  ? "bg-accent hover:bg-accent/90 text-white"
                  : "bg-white text-primary hover:bg-white/90"
              }`}
            >
              Hemen Başlayın
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Menüyü kapat" : "Menüyü aç"}
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? "text-primary" : "text-white"}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? "text-primary" : "text-white"}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className={`md:hidden mt-4 pb-4 border-t ${isScrolled ? "border-slate-200" : "border-white/10"}`}>
            <nav className="flex flex-col gap-2 pt-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className={`text-left py-2 px-4 rounded-lg font-medium transition-colors ${
                    isScrolled
                      ? "text-slate-600 hover:bg-secondary hover:text-primary"
                      : "text-white/90 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <Button
                onClick={() => scrollToSection("iletisim")}
                className="mt-2 bg-accent hover:bg-accent/90 text-white font-semibold"
              >
                Hemen Başlayın
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}