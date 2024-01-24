"use client";
import Login from "./login";
import Register from "./register";
import useLoginRegisterStore from "@/lib/store/login-register";
import ToggleLoginRegister from "./toggleLoginRegister";

function SectionLog() {
  const { register } = useLoginRegisterStore();
  return (
    <div className="w-full flex flex-col justify-center items-center gap-4">
      <ToggleLoginRegister />
      {register ? <Register /> : <Login />}
    </div>
  );
}

export default SectionLog;
