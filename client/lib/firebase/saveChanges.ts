import { auth, db, storage } from "./app";
import {
  getAuth,
  updatePassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";

import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export const saveChangesPerfil = async (
  name: string,
  email: string,
  docId: string,
  phone: string,
  direction: string,
  avatarURL: string | undefined
) => {
  const user = auth.currentUser;
  if (user) {
    const userRef = doc(db, "users", user.uid);
    try {
      await updateDoc(userRef, {
        name,
        email,
        doc: docId,
        phone,
        direction,
        avatar: avatarURL,
      });

      const currentData = JSON.parse(sessionStorage.getItem("user") || "{}");

      currentData.name = name;
      currentData.email = email;
      currentData.doc = docId;
      currentData.phone = phone;
      currentData.direction = direction;
      currentData.avatar = avatarURL;

      sessionStorage.setItem("user", JSON.stringify(currentData));
    } catch (error) {
      console.error("Error updating document: ", error);
      throw error;
    }
  }
};

export const saveAvatar = async (avatar: Blob) => {
  const user = auth.currentUser;
  if (user) {
    const avatarRef = ref(storage, `${user.uid}`);
    try {
      await uploadBytes(avatarRef, avatar);
      const avatarUrl = await getDownloadURL(avatarRef);
      return avatarUrl;
    } catch (error) {
      console.error("Error saving avatar: ", error);
      throw error;
    }
  }
};

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
