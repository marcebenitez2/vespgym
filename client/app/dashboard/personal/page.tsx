"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import React from "react";

export default function page() {
  const user = sessionStorage.getItem("user");

  return (
    <div className="h-screen w-full px-44 py-32">
      <div className="border w-full h-full rounded-lg flex px-16 py-10">
        <div className="h-full w-full flex flex-col gap-14">
          <h1 className="text-3xl font-semibold text-yellow-400">
            Informacion personal
          </h1>
          <div className="flex flex-col h-full w-full gap-7 pr-32">
            <div className="grid w-full  items-center gap-1.5">
              <Label htmlFor="name">Nombre</Label>
              <Input type="text" id="name" />
            </div>
            <div className="grid w-full  items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input disabled type="email" id="mail" />
            </div>
            <div className="grid w-full  items-center gap-1.5">
              <Label htmlFor="doc">Documento</Label>
              <Input disabled type="text" id="doc" />
            </div>
            <div className="grid w-full  items-center gap-1.5">
              <Label htmlFor="tel">Telefono</Label>
              <Input type="text" id="tel" />
            </div>
            <div className="grid w-full  items-center gap-1.5">
              <Label htmlFor="dir">Direccion</Label>
              <Input type="text" id="dir" />
            </div>
          </div>
        </div>
        <div className="w-full h-full flex flex-col items-center py-5">
          <div className="w-full flex justify-center flex-col items-center gap-8 ">
            <div className="w-64 h-64 rounded-full border"></div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="picture">Picture</Label>
              <Input id="picture" type="file" />
            </div>
          </div>
          <div className="flex gap-4 h-full items-end">
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
