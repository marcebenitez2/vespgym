"use client";
import { FormEvent, useRef, useState } from "react";
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
import { registerUser } from "../lib/firebase/register";
import { toast } from "sonner";

function Register() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const telRef = useRef<HTMLInputElement>(null);
  const direcRef = useRef<HTMLInputElement>(null);
  const docRef = useRef<HTMLInputElement>(null);

  const [emailError, setEmailError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setEmailError(null);

    if (
      !emailRef.current ||
      !passwordRef.current ||
      !nameRef.current ||
      !telRef.current ||
      !direcRef.current ||
      !docRef.current ||
      !emailRef.current.value.trim() ||
      !passwordRef.current.value.trim() ||
      !nameRef.current.value.trim() ||
      !telRef.current.value.trim() ||
      !direcRef.current.value.trim() ||
      !docRef.current.value.trim()
    ) {
      toast("Rellena todos los campos ❌❌");
      return;
    }

    const email: string = emailRef.current.value;
    const password: string = passwordRef.current.value;
    const name: string = nameRef.current.value;
    const tel: string = telRef.current.value;
    const direc: string = direcRef.current.value;
    const doc: string = docRef.current.value;

    const user = await registerUser(
      email,
      password,
      doc,
      name,
      tel,
      direc
    ).catch((error) => {
      if (error.code === "auth/email-already-in-use") {
        setEmailError("Error. Ya existe un usuario con ese correo");
      }
    });

    
  };

  return (
    <Card className="w-2/3 pb-4 animate-fade animate-once animate-duration-500">
      <form onSubmit={handleSubmit}>
        <CardHeader className="text-center">
          <CardTitle className="text-yellow-400 text-3xl">
            Registrarse
          </CardTitle>
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
            <p className={`text-red-600 text-sm ${emailError ? "" : "hidden"}`}>
              {emailError}
            </p>
            <Label>Nombre</Label>
            <Input
              type="text"
              id="name"
              placeholder="Roman Berrugas"
              ref={nameRef}
            />
            <Label>Documento</Label>
            <Input type="text" id="doc" placeholder="44232238" ref={docRef} />
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
          <Button className="w-full" onClick={handleSubmit} type="submit">
            Registrarse
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}

export default Register;
