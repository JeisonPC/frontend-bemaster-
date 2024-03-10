import { useContext } from "react";
import { AuthContext } from "@/context/authContext/authContext";

function useAuthContext() {
  const context = useContext(AuthContext);

  return context;
}

export default useAuthContext;
