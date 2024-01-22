import { CarouselPlugin } from "@/components/carrousel";
import Login from "@/components/login";

export default function Home() {
  return (
    <main className="flex w-screen h-screen">
      <CarouselPlugin />
      <Login />
    </main>
  );
}
