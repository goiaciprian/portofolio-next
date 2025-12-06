"use client";

import { createContext } from "react";

export type UserContextType = {
  name: string;
  email: string;
};

export const UserContext = createContext<UserContextType>({
  name: "",
  email: "",
});
