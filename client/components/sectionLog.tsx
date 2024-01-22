"use client";
import Login from "./login";
import Register from "./register";
import useLoginRegisterStore from "@/lib/store/login-register";

function SectionLog() {
  const { register } = useLoginRegisterStore();
  return (
    <div className="w-full flex flex-col justify-center items-center">
      {register ? <Register /> : <Login />}
    </div>
  );
}

export default SectionLog;
