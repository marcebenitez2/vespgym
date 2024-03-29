import { createUserWithEmailAndPassword, Auth, getAuth } from "firebase/auth";
import { auth } from "./app";
import { collection, addDoc, Firestore, setDoc, doc } from "firebase/firestore";
import { db } from "./app";
import { userSchema } from "../zod/userSchema";
import useUserStore from "../store/user";

// Datos que el usuario ingresa
interface UserInputData {
  name: string;
  email: string;
  password: string;
  doc: string;
  phone: string;
  direction: string;
}

// Datos almacenados en el contexto de Zustand
interface UserContext {
  uid: string;
  name: string;
  email: string;
  doc: string;
  phone: string;
  direction: string;
  accessToken: string; // Incluido en el contexto pero no en el documento de Firestore
}

// Datos que se almacenan en Firestore
export interface User extends Omit<UserContext, "accessToken"> {}

// Middleware de autenticación de usuario

// Función de registro de usuario
export const registerUser = async (
  userInput: UserInputData
): Promise<UserContext> => {
  try {
    userSchema.parse(userInput);

    const userCredential = await createUserWithEmailAndPassword(
      auth as Auth,
      userInput.email,
      userInput.password
    );

    // Almacena los datos del usuario en Firestore sin incluir el accessToken
    await setDoc(doc(db as Firestore, "users", userCredential.user.uid), {
      uid: userCredential.user.uid,
      name: userInput.name,
      phone: userInput.phone,
      direction: userInput.direction,
      email: userInput.email,
      doc: userInput.doc,
    } as UserContext);

    // Actualiza el contexto incluyendo el accessToken
    const authInstance = getAuth();
    const currentUser = authInstance.currentUser;
    const accessToken = currentUser ? await currentUser.getIdToken() : "";

    useUserStore.setState({
      uid: userCredential.user.uid,
      name: userInput.name,
      email: userInput.email,
      doc: userInput.doc,
      phone: userInput.phone,
      direction: userInput.direction,
      accessToken,
    });

    // Establecer el token de ID como una cookie en el navegador
    document.cookie = `currentUser=${accessToken}`;

    // Devuelve el objeto completo, que incluye accessToken
    return {
      uid: userCredential.user.uid,
      name: userInput.name,
      email: userInput.email,
      doc: userInput.doc,
      phone: userInput.phone,
      direction: userInput.direction,
      accessToken,
    };
  } catch (error) {
    console.error(error);
    throw error;
  }
};
