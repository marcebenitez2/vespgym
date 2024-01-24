import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./app";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./app";

export const registerUser = async (
  email,
  password,
  doc,
  name,
  phone,
  direccion
) => {
  const { user } = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  ).then(async () => {
    await addDoc(collection(db, "users"), {
      id: user.uid,
      name,
      phone,
      direccion,
      email,
      doc,
    });
  });

  return user;
};
