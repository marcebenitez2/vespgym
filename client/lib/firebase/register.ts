import { createUserWithEmailAndPassword, Auth } from "firebase/auth";
import { auth } from "./app";
import { collection, addDoc, Firestore } from "firebase/firestore";
import { db } from "./app";
import { userSchema } from "../zod/userSchema";


interface UserData {
  id: string;
  name: string;
  phone: string;
  direccion: string;
  email: string;
  doc: string;
}

interface User {
  uid: string;
}

export const registerUser = async (
  email: string,
  password: string,
  doc: string,
  name: string,
  phone: string,
  direccion: string
): Promise<User> => {
  try {
    userSchema.parse({
      email,
      password,
      doc,
      name,
      phone,
      direccion,
    });

    const { user }: { user: User } = await createUserWithEmailAndPassword(
      auth as Auth,
      email,
      password
    );

    await addDoc(collection(db as Firestore, "users"), {
      id: user.uid,
      name,
      phone,
      direccion,
      email,
      doc,
    } as UserData);



    return user;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
