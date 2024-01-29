import { create } from "zustand";

interface context {
  uid: string;
  name: string;
  email: string;
  password: string;
  doc: string;
  accessToken: string;
  phone: string;
  direction: string;
  avatar: string;
}

interface UserStore {
  uid: string;
  name: string;
  email: string;
  password: string;
  doc: string;
  accessToken: string;
  phone: string;
  direction: string;
  avatar: string;
  updateUser: (user: context) => void;
}

const useUserStore = create<UserStore>()((set) => ({
  uid: "",
  name: "",
  email: "",
  password: "",
  doc: "",
  accessToken: "",
  phone: "",
  direction: "",
  avatar: "",
  updateUser: (user) => set(state=>({
    uid: user.uid,
    name: user.name,
    email: user.email,
    password: user.password,
    doc: user.doc,
    accessToken: user.accessToken,
    phone: user.phone,
    direction: user.direction,
    avatar: user.avatar,
  })),
}));

export default useUserStore;
