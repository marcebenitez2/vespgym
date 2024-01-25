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
  const phoneRef = useRef<HTMLInputElement>(null);
  const direcRef = useRef<HTMLInputElement>(null);
  const docRef = useRef<HTMLInputElement>(null);
  const [emailError, setEmailError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setEmailError(null);

    const email = emailRef.current?.value.trim();
    const password = passwordRef.current?.value.trim();
    const name = nameRef.current?.value.trim();
    const phone = phoneRef.current?.value.trim();
    const direction = direcRef.current?.value.trim();
    const doc = docRef.current?.value.trim();

    if (!email || !password || !name || !phone || !direction || !doc) {
      toast("Rellena todos los campos ❌❌");
      return;
    }

    try {
      await registerUser({
        email,
        password,
        name,
        phone,
        direction,
        doc,
      });

      // Si llegamos aquí, el registro fue exitoso
    } catch (error) {
      if (error instanceof Error) {
        if (error.message.includes("auth/email-already-in-use")) {
          setEmailError("Error. Ya existe un usuario con ese correo");
        } else {
          console.error("Error al registrar usuario:", error);
          toast("Error al registrar usuario ❌");
        }
      }
    }
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
            <Input
              type="tel"
              id="tel"
              placeholder="3415690480"
              ref={phoneRef}
            />
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
          <Button className="w-full" type="submit">
            Registrarse
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}

export default Register;
