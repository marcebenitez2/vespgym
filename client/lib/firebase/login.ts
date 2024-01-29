import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "./app";
import { collection, getDocs, query, where } from "firebase/firestore";

interface LoginUserInput {
  email: string;
  password: string;
}

export const loginUser = async (credenciales: LoginUserInput) => {
  try {
    const { user } = await signInWithEmailAndPassword(
      auth,
      credenciales.email,
      credenciales.password
    );

    const authInstance = getAuth();
    const currentUser = authInstance.currentUser;
    const accessToken = currentUser ? await currentUser.getIdToken() : "";

    const usersCollection = collection(db, "users");
    const q = query(usersCollection, where("uid", "==", user.uid));
    const { docs } = await getDocs(q);

    if (docs.length === 0) {
      throw new Error("User data not found");
    }

    const userData = docs[0].data();

    document.cookie = `currentUser=${accessToken}`;

    return {
      uid: user.uid,
      name: userData.name,
      email: userData.email,
      password: credenciales.password,
      doc: userData.doc,
      accessToken,
      phone: userData.phone,
      direction: userData.direction,
      avatar: "",
    };
  } catch (error) {
    console.error("Login error:", error);
    throw error; // Rethrow the error to be caught in the Login component
  }
};

