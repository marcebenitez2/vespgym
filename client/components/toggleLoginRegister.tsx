"use client";

import { Switch } from "@/components/ui/switch";
import useLoginRegisterStore from "@/lib/store/login-register";
import { useState } from "react";

function ToggleLoginRegister() {
  const { setLogin, setRegister } = useLoginRegisterStore();
  const [isRegister, setIsRegister] = useState(false);

  const handleSwitchChange = (checked: boolean) => {
    setIsRegister(checked);
    checked ? setRegister() : setLogin();
  };

  return (
    <div className="flex gap-4 justify-center absolute right-6 top-6">
      <label>Login</label>
      <Switch onCheckedChange={handleSwitchChange} checked={isRegister} />
      <label>Registrarte</label>
    </div>
  );
}

export default ToggleLoginRegister;
