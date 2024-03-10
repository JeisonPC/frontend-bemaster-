'use client'
import { useEffect } from "react";
import { useContext } from "react";
import useUser from "@/hooks/useUser";
import { redirect } from 'next/navigation';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, isLoading } = useUser();


  useEffect(() => {
    if (!isLoading && user === null) {
      // Solo redirige si isLoading es false y user es null
      redirect("/login");
    }
  }, [user, isLoading]);

  return <>{children}</>;
}

export default ProtectedRoute;
