import { createContext, ReactNode, useContext, useState } from 'react';
import { api } from '../services/api';
import { useRouter } from 'next/router';

interface UsersProviderProps {
  children: ReactNode;
}

interface UsersContextProps {
  user: UsersProps;
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
  const [userToken, setUserToken] = useState('');
  const [user, setUser] = useState({
    id: '',
    name: '',
    username: '',
    email: '',
    isAdmin: false,
    userToken: ''
  });
  async function handleSignInUser(username: string, password: string) {
    try {
      const { data } = await api.post('/sessions', {
        username: username,
        password: password
      });
      setUserToken(data.token);
      setUser(data.user);
      console.log(data.user);
      sessionStorage.setItem('token', data.token);
      router.push('/Homepage');
    } catch {
      router.push('/');
    }
  }
  async function handleSignOutUser() {
    sessionStorage.clear();
    router.push('/');
  }
  console.log(user);
  return (
    <UsersContext.Provider
      value={{
        handleSignInUser,
        userToken,
        user,
        handleSignOutUser
      }}
    >
      {children}
    </UsersContext.Provider>
  );
}

export const useSidebarDrawer = () => useContext(UsersContext);
