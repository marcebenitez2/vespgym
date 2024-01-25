import { create } from "zustand";

type UserStore = {
  uid: string;
  name: string;
  email: string;
  password: string;
  doc: string;
  accessToken: string;
  phone: string;
  direction: string;
};

const useUserStore = create<UserStore>()((set) => ({
  uid: "",
  name: "",
  email: "",
  password: "",
  doc: "",
  accessToken: "",
  phone: "",
  direction: "",
}));

export default useUserStore;



