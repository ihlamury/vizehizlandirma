import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { SectionDivider } from "@/components/section-divider";
import { Problems } from "@/components/problems";
import { Services } from "@/components/services";
import { HowItWorks } from "@/components/how-it-works";
import { FAQ } from "@/components/faq";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SectionDivider from="primary" to="secondary" />
        <Problems />
        <SectionDivider from="secondary" to="white" />
        <Services />
        <SectionDivider from="white" to="secondary" />
        <HowItWorks />
        <SectionDivider from="secondary" to="white" />
        <FAQ />
        <SectionDivider from="white" to="secondary" />
        <Contact />
        <SectionDivider from="secondary" to="primary" />
      </main>
      <Footer />
    </>
  );
}