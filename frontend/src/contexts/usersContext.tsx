import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../services/api";
import { useRouter } from "next/router";

interface UsersProviderProps {
  children: ReactNode;
}

interface UsersContextProps {
  user: UsersProps;
  loadUser: () => Promise<void>;
  handleSignInUser: (username: string, password: string) => Promise<void>;
  handleSignOutUser: () => Promise<void>;
  userToken: string;
}

type UsersProps = {
  id: string;
  name: string;
  username: string;
  email: string;
  isAdmin: boolean;
  userToken: string;
};

export const UsersContext = createContext({} as UsersContextProps);

export function UsersProvider({ children }: UsersProviderProps) {
  const router = useRouter();
  const [data, setData] = useState<string | null>("");
  const [userToken, setUserToken] = useState("");
  const [user, setUser] = useState({
    id: "",
    name: "",
    username: "",
    email: "",
    isAdmin: false,
    userToken: "",
  });
  async function loadUser() {
    async function getSessionStorage(): Promise<void> {
      return new Promise((resolve) => {
        setData(sessionStorage.getItem("user"));
        resolve();
      });
    }
    await getSessionStorage();
    if (data) {
      const user = JSON.parse(data);
      setUser(user);
    }

    return;
  }
  async function handleSignInUser(username: string, password: string) {
    try {
      const { data } = await api.post("/sessions", {
        username: username,
        password: password,
      });
      setUserToken(data.token);
      sessionStorage.setItem("token", data.token);
      sessionStorage.setItem("user", JSON.stringify(data.user));
      router.push("/Homepage");
    } catch {
      router.push("/");
    }
  }
  async function handleSignOutUser() {
    sessionStorage.clear();
    router.push("/");
  }

  return (
    <UsersContext.Provider
      value={{
        handleSignInUser,
        userToken,
        user,
        handleSignOutUser,
        loadUser,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
}

export const useSidebarDrawer = () => useContext(UsersContext);
