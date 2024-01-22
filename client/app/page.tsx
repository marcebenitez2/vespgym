import { CarouselPlugin } from "@/components/carrousel";
import SectionLog from "@/components/sectionLog";

export default function Home() {
  return (
    <main className="flex w-screen h-screen">
      <CarouselPlugin />
      <SectionLog />
    </main>
  );
}
