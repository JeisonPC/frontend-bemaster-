'use client'
import { AuthContext } from "@/context/authContext/authContext";
import { UserType } from "@/interfaces/user";
import { useAuth } from "@/hooks/useAuth";

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({children}: AuthProviderProps) => {
  const {user} = useAuth();
  return (
    <AuthContext.Provider value={{user: user as UserType}}>
      {children}
    </AuthContext.Provider>
  )
}
