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

function Login() {
  return (
    <div className="w-full flex justify-center h-full items-center">
      <div className="w-2/3">
        <Card className="w-full">
          <CardHeader className="text-center">
            <CardTitle className="text-yellow-400 text-3xl">Login</CardTitle>
            <CardDescription>
              Inicie sesion para poder acceder al sistema
            </CardDescription>
          </CardHeader>
          <CardContent className="w-full">
            <div className="grid w-full items-center gap-2">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="roman@gmail.com" />
              <Label htmlFor="email">Contraseña</Label>
              <Input type="email" id="email" placeholder="**********" />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Iniciar sesion</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default Login;
