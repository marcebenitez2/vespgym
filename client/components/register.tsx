"use client";
import ToggleLoginRegister from "./toggleLoginRegister";
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

function Register() {
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
          <Input type="email" id="email" placeholder="roman@gmail.com" />
          <Label>Contraseña</Label>
          <Input type="password" id="password" placeholder="**********" />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Registrarse</Button>
      </CardFooter>
    </Card>
  );
}

export default Register;
