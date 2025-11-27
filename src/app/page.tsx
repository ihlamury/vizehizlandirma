import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Problems } from "@/components/problems";
import { Services } from "@/components/services";
import { HowItWorks } from "@/components/how-it-works";
import { FAQ } from "@/components/faq";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problems />
        <Services />
        <HowItWorks />
        <FAQ />
        <Contact />
      </main>
    </>
  );
}