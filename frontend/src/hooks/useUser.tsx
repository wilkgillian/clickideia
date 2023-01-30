import { useContext } from "react";
import { UsersContext } from "../contexts/usersContext";

export function useUser() {
  const context = useContext(UsersContext);

  return context;
}
