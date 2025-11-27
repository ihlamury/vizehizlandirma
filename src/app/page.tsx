import { Hero } from "@/components/hero";
import { Problems } from "@/components/problems";
import { Services } from "@/components/services";

export default function Home() {
  return (
    <main>
      <Hero />
      <Problems />
      <Services />
    </main>
  );
}