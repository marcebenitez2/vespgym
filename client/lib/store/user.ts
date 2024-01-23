import { create } from "zustand";

type UserStore = {
  uid: string;
  name: string;
  email: string;
  token: string;
  phone: string;
};

const useUserStore = create<UserStore>()((set) => ({
  uid: "",
  name: "",
  email: "",
  token: "",
  phone: "",
}));

export default useUserStore;
