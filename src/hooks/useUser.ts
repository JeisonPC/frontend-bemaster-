import { useContext } from "react";
import { AuthContext } from "@/context/authContext/authContext";

function useUser() {
  const user = useContext(AuthContext);

  const isLoading = user === undefined;

  return {user, isLoading};
}

export default useUser;
