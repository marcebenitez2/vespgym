import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./app";

export const registerUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};
