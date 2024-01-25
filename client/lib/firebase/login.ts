import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "./app";
import useUserStore from "../store/user";
import { collection, getDocs, query, where } from "firebase/firestore";

interface LoginUserInput {
  email: string;
  password: string;
}

export const loginUser = async (credenciales: LoginUserInput) => {
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
  const userData = docs[0].data();

  document.cookie = `currentUser=${accessToken}`;

  if (userData) {
    useUserStore.setState({
      uid: user.uid,
      name: userData.name,
      email: userData.email,
      doc: userData.doc,
      accessToken,
      phone: userData.phone,
      direction: userData.direction,
    });
  }
};
