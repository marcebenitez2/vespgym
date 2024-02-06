import { auth, db } from "./app";
import {
  getAuth,
  updatePassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const saveChangesPerfil = async () => {};

export const changePasswordFunc = async (
  email: string,
  oldpassword: string,
  newPassword: string
) => {
  const authInstance = getAuth();
  const user = authInstance.currentUser;
  try {
    await signInWithEmailAndPassword(auth, email, oldpassword);
    if (user) {
      await updatePassword(user, newPassword);
    }
  } catch (error) {
    console.error("Error updating password:", error);
    throw error;
  }
};
