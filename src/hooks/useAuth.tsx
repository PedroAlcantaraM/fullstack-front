import { useContext } from "react";
import { AuthContext } from "../contexts/UserContext/AuthContext";

export const useAuth = () => {
  const authContext = useContext(AuthContext);

  return authContext;
};
