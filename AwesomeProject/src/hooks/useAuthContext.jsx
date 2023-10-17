import { useContext } from "react";
import { AuthContext } from "../Context/authContext";

export const useAuthContext = () => useContext(AuthContext);