import { create } from "zustand";

type LoginRegisterState = {
  login: boolean;
  register: boolean;
  setLogin: () => void;
  setRegister: () => void;
};

const useLoginRegisterStore = create<LoginRegisterState>((set) => ({
  login: true,
  register: false,
  setLogin: () => set({ login: true, register: false }),
  setRegister: () => set({ login: false, register: true }),
}));

export default useLoginRegisterStore;
