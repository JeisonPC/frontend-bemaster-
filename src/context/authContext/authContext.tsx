
'use client'
import { createContext } from "react";
import { UserType } from "@/interfaces/user";


export const AuthContext = createContext<{ user: UserType | null }>({
  user: null,
});
