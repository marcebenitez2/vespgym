"use client";
import { FormEvent, useRef } from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { registerUser } from "../lib/firebase/register.js";
import { toast } from "sonner";

function Register() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const telRef = useRef<HTMLInputElement>(null);
  const direcRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (
      !emailRef.current ||
      !passwordRef.current ||
      !nameRef.current ||
      !telRef.current ||
      !direcRef.current
    ) {
      return;
    }

    const email: string = emailRef.current.value;
    const password: string = passwordRef.current.value;
    const name: string = nameRef.current.value;
    const tel: string = telRef.current.value;
    const direc: string = direcRef.current.value;

    const user = await registerUser(email, password, name, tel, direc);
  };

  return (
    <Card className="w-2/3 pb-4">
      <CardHeader className="text-center">
        <CardTitle className="text-yellow-400 text-3xl">Registrarse</CardTitle>
        <CardDescription>
          Nos encanta que se sume gente a entrenar!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid w-full items-center gap-2">
          <Label>Email</Label>
          <Input
            type="email"
            id="email"
            placeholder="roman@gmail.com"
            ref={emailRef}
          />
          <Label>Nombre</Label>
          <Input
            type="text"
            id="name"
            placeholder="Roman Berrugas"
            ref={nameRef}
          />
          <Label>Telefono</Label>
          <Input type="tel" id="tel" placeholder="3415690480" ref={telRef} />
          <Label>Direccion</Label>
          <Input
            type="text"
            id="direc"
            placeholder="Ameghino 12"
            ref={direcRef}
          />
          <Label>Contraseña</Label>
          <Input
            type="password"
            id="password"
            placeholder="**********"
            ref={passwordRef}
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={handleSubmit}>
          Registrarse
        </Button>
      </CardFooter>
    </Card>
  );
}

export default Register;
