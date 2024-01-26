import { CarouselPlugin } from "@/components/carrousel";
import SectionLog from "@/components/sectionLog";

export default function Home() {
  return (
    <main className="w-screen h-screen max-h-screen flex">
      <CarouselPlugin />
      <SectionLog />
    </main>
  );
}
