'use client'
import { useLayoutEffect } from "react";
import { useRouter } from "next/navigation";
import useAuthContext from "@/hooks/useUser";
import { redirect } from 'next/navigation';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user } = useAuthContext();

  useLayoutEffect(() => {
    const isAuth = user;
    if (!isAuth) {
      redirect("/login")
    }
  }, [user]);

  return <>{children}</>;
}

export default ProtectedRoute;
