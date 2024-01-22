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

function Login() {
  return (
    <div className="w-full">
      <div className="w-1/2">
        <Card>
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>
              En caso de tener una cuenta inicie sesion
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="roman@gmail.com" />
              <Label htmlFor="email">Contraseña</Label>
              <Input type="email" id="email" placeholder="**********" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Login;
