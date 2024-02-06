"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";
import useSessionStorage from "@/hooks/useSessionStorage";
import { UserInterface } from "@/lib/interface/interfaces";
import { useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { changePasswordFunc } from "@/lib/firebase/saveChanges";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export default function page() {
  const router = useRouter();

  const user: UserInterface | null = useSessionStorage("user");

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const docRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const directionRef = useRef<HTMLInputElement>(null);
  const avatarRef = useRef<HTMLInputElement>(null);

  const handleSave = () => {
    const name = nameRef.current?.value;
    const email = emailRef.current?.value;
    const doc = docRef.current?.value;
    const phone = phoneRef.current?.value;
    const direction = directionRef.current?.value;
    const avatar = avatarRef.current?.files;

    if (name && email && doc && phone && direction) {
      console.log(name, email, doc, phone, direction, avatar);
    } else {
      console.log("Todos los campos son requeridos");
      toast.error("Todos los campos son requeridos");
    }
  };

  return (
    <div className="h-screen w-full px-40 py-32 lgn:h-full lgn:py-5 lgn:px-2">
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
              <Input
                type="text"
                id="name"
                defaultValue={user?.name || ""}
                ref={nameRef}
              />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                disabled
                type="email"
                id="mail"
                defaultValue={user?.email || ""}
                ref={emailRef}
              />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="doc">Documento</Label>
              <Input
                disabled
                type="text"
                id="doc"
                defaultValue={user?.doc || ""}
                ref={docRef}
              />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="tel">Telefono</Label>
              <Input
                type="text"
                id="tel"
                defaultValue={user?.phone || ""}
                ref={phoneRef}
              />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="dir">Direccion</Label>
              <Input
                type="text"
                id="dir"
                defaultValue={user?.direction || ""}
                ref={directionRef}
              />
            </div>
          </div>
          <div className="gap-4 h-full items-end hidden lgn:flex">
            <Button className="bg-red-600 text-white hover:bg-red-800">
              Eliminar perfil
            </Button>
            <Button onClick={handleSave}>Guardar</Button>
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
              <Input id="picture" type="file" ref={avatarRef} />
            </div>
          </div>
          <DialogComponent />
          <div className="flex gap-4 h-full items-end lgn:hidden">
            <Button className="bg-red-600 text-white hover:bg-red-800">
              Eliminar perfil
            </Button>
            <Button onClick={handleSave}>Guardar</Button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

const DialogComponent = () => {
  const passOldRef = useRef<HTMLInputElement>(null);
  const passNewRef = useRef<HTMLInputElement>(null);
  const user: UserInterface | null = useSessionStorage("user");

  const changePassword = () => {
    if (
      passOldRef.current?.value === user?.password &&
      passNewRef.current?.value
    ) {
      changePasswordFunc(
        user?.email || "",
        user?.password || "",
        passNewRef.current?.value
      );
    }
  };

  return (
    <Dialog>
      <DialogTrigger className="bg-red-600 px-5 py-2 rounded-lg">
        Cambiar contrasena
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Cambiar la contraseña</DialogTitle>
          <DialogDescription>
            Para cambiar la contraseña primero coloca la anterior
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4 w-full">
          <div className="flex flex-col w-full gap-2">
            <Label htmlFor="passOld">Contraseña anterior</Label>
            <Input type="password" id="passOld" ref={passOldRef} />
          </div>
          <div className="flex flex-col w-full gap-2">
            <Label htmlFor="passNew">Nueva contraseña</Label>
            <Input type="password" id="passNew" ref={passNewRef} />
          </div>
        </div>
        <Button onClick={changePassword}>Guardar</Button>
      </DialogContent>
    </Dialog>
  );
};
