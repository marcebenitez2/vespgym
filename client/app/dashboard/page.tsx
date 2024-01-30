"use client";
import { useRouter } from "next/navigation";
import "./style.css";

function Page() {
  const router = useRouter();

  return (
    <main className="h-screen w-full px-36 py-20 grid grid-cols-3 grid-rows-2 gap-8">
      <div
        className="row-span-2 border rounded-lg w-full h-full  flex justify-center items-center card card1"
        onClick={() => router.push("/dashboard/reservar")}
      >
        <h1 className="text-yellow-400 text-5xl font-bold">Reservar</h1>
      </div>
      <div
        className="border rounded-lg flex justify-center items-center card card2"
        onClick={() => router.push("/dashboard/rutina")}
      >
        <h1 className="text-yellow-400 text-5xl font-bold">Rutina</h1>
      </div>
      <div
        className="col-span-2 col-start-2 row-start-2 border rounded-lg flex justify-center items-center card card3"
        onClick={() => router.push("/dashboard/estadisticas")}
      >
        <h1 className="text-yellow-400 text-5xl font-bold">Estadisticas</h1>
      </div>
      <div
        className="col-start-3 row-start-1 border rounded-lg flex justify-center items-center card card4"
        onClick={() => router.push("/dashboard/personal")}
      >
        <h1 className="text-yellow-400 text-5xl font-bold">Datos personales</h1>
      </div>
    </main>
  );
}

export default Page;


// bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]