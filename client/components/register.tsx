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

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!emailRef.current || !passwordRef.current) {
      return;
    }

    const email: string = emailRef.current.value;
    const password: string = passwordRef.current.value;

    await registerUser(email, password)
      .then(() => {
        toast("Usuario registrado con éxito! ✅");
      })
      .catch((error) => {
        toast(error.message);
      });
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
