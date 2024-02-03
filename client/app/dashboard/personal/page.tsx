"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";
import useSessionStorage from "@/hooks/useSessionStorage";
import { UserInterface } from "@/lib/interface/interfaces";

export default function page() {
  const router = useRouter();

  const user: UserInterface | null = useSessionStorage("user");

  return (
    <div className="h-screen w-full px-40 py-32 lgn:h-full lgn:py-5">
      <div className="border w-full h-full rounded-lg flex px-16 py-10 lgn:flex-col-reverse lgn:py-5 lgn:px-4">
        <FaArrowLeft
          className="text-5xl text-yellow-400 lgn:hidden absolute left-10 top-10"
          onClick={() => router.back()}
        />
        <div className="h-full w-full flex flex-col gap-14">
          <h1 className="text-3xl font-semibold text-yellow-400 lgn:hidden">
            Informacion personal
          </h1>
          <div className="flex flex-col h-full w-full gap-7 pr-32 lgn:pr-0">
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="name">Nombre</Label>
              <Input type="text" id="name" defaultValue={user?.name || ""} />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                disabled
                type="email"
                id="mail"
                defaultValue={user?.email || ""}
              />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="doc">Documento</Label>
              <Input
                disabled
                type="text"
                id="doc"
                defaultValue={user?.doc || ""}
              />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="tel">Telefono</Label>
              <Input type="text" id="tel" defaultValue={user?.phone || ""} />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="dir">Direccion</Label>
              <Input
                type="text"
                id="dir"
                defaultValue={user?.direction || ""}
              />
            </div>
          </div>
          <div className="gap-4 h-full items-end hidden lgn:flex">
            <Button className="bg-red-600 text-white hover:bg-red-800">
              Eliminar perfil
            </Button>
            <Button>Guardar</Button>
          </div>
        </div>
        <div className="w-full h-full flex flex-col items-center py-5 gap-4">
          <h1 className="text-3xl font-semibold text-yellow-400 lgn:block hidden">
            Informacion personal
          </h1>
          <div className="w-full flex justify-center flex-col items-center gap-8 ">
            <div className="w-64 h-64 rounded-full border flex justify-center items-center text-5xl lgn:w-40 lgn:h-40">
              +
            </div>
            <div className="grid w-full  items-center gap-1.5">
              <Label htmlFor="picture">Picture</Label>
              <Input id="picture" type="file" />
            </div>
          </div>
          <div className="flex gap-4 h-full items-end lgn:hidden">
            <Button className="bg-red-600 text-white hover:bg-red-800">
              Eliminar perfil
            </Button>
            <Button>Guardar</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
