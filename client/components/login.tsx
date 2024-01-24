"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { FormEvent, useRef } from "react";
import { loginUser } from "../lib/firebase/login.js";

function Login() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!emailRef.current || !passwordRef.current) {
      return;
    }

    const email: string = emailRef.current.value;
    const password: string = passwordRef.current.value;

    await loginUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Card className="w-2/3 pb-4 animate-fade animate-once animate-duration-500">
      <CardHeader className="text-center">
        <CardTitle className="text-yellow-400 text-3xl">Login</CardTitle>
        <CardDescription>
          Inicie sesion para poder acceder al sistema
        </CardDescription>
      </CardHeader>
      <CardContent className="w-full">
        <div className="grid w-full items-center gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            placeholder="roman@gmail.com"
            ref={emailRef}
          />
          <Label htmlFor="email">Contraseña</Label>
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
          Iniciar sesion
        </Button>
      </CardFooter>
    </Card>
  );
}

export default Login;
