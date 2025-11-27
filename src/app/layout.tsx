import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  // Primary Meta Tags
  title: "Amerika Vize Randevusu Hızlandırma | DS-160 Form Doldurma | Vize Hızlandırma",
  description: "Amerika vize randevunuzu hızlandırıyoruz. DS-160 form doldurma, hesap oluşturma ve randevu öne çekme hizmetleri. 7/24 otomatik tarama ile erken randevu buluyoruz. İstanbul ve Ankara konsoloslukları için hizmet.",
  
  // Keywords for search engines
  keywords: [
    "amerika vize randevusu",
    "abd vize randevusu",
    "vize randevusu erkene alma",
    "amerika vize randevusu hızlandırma",
    "ds-160 form doldurma",
    "abd vize başvurusu",
    "amerika vizesi",
    "vize randevusu öne çekme",
    "acil vize randevusu",
    "istanbul vize randevusu",
    "ankara vize randevusu",
    "amerika turist vizesi",
    "usvisascheduling",
    "vize danışmanlık",
    "amerika vize hizmetleri",
  ].join(", "),

  // Open Graph / Facebook
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://vizehizlandirma.com",
    siteName: "Vize Hızlandırma",
    title: "Amerika Vize Randevusu Hızlandırma | Erken Randevu Alın",
    description: "Amerika vize randevunuzu aylar öncesine çekiyoruz. DS-160 form doldurma, hesap oluşturma ve 7/24 otomatik randevu tarama hizmeti. 500+ mutlu müşteri.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vize Hızlandırma - Amerika Vize Randevusu Hızlandırma Hizmeti",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Amerika Vize Randevusu Hızlandırma | Vize Hızlandırma",
    description: "Amerika vize randevunuzu aylar öncesine çekiyoruz. DS-160 form doldurma ve 7/24 otomatik randevu tarama hizmeti.",
    images: ["/og-image.png"],
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Verification (add your codes after setting up)
  verification: {
    google: "PNYrVaqaurv_UqSPDH4gOEKvxdBKt5eeQHGZ3IrVIa4",
    // other: {
    //   "facebook-domain-verification": "YOUR_FACEBOOK_VERIFICATION_CODE",
    // },
  },

  // Canonical URL
  alternates: {
    canonical: "https://vizehizlandirma.com",
  },

  // Additional meta
  authors: [{ name: "Vize Hızlandırma" }],
  creator: "Vize Hızlandırma",
  publisher: "Vize Hızlandırma",
  category: "Vize Danışmanlık",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Google Ads Conversion Tracking - Replace with your ID */}
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17763826678"></script> */}
        
        {/* Meta Pixel - Replace with your ID */}
        {/* Will be added after you create Meta Pixel */}
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}