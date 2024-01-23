import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./app";

export const registerUser = async (email, password) => {
  return await createUserWithEmailAndPassword(auth, email, password);
};
