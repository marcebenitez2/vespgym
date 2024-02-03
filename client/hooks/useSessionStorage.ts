
import { useState, useEffect } from "react";
import { UserInterface } from "@/lib/interface/interfaces";

const useSessionStorage = (name: string): UserInterface | null => {
  const [value, setValue] = useState<UserInterface | null>(null);

  useEffect(() => {
    try {
      const storedValue = sessionStorage.getItem(name);
      const parsedValue = storedValue ? JSON.parse(storedValue) : null;
      setValue(parsedValue);
    } catch (error) {
      console.error("Error parsing JSON from sessionStorage:", error);
    }
  }, [name]);

  return value;
};

export default useSessionStorage;
