import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react';
import { api } from '../services/api';

interface FilmsProviderProps {
  children: ReactNode;
}

interface FilmsContextProps {
  dados: FilmsProps[];
}

interface FilmsProps {
  id: string;
  title: string;
  subtitle?: string;
  genre: string;
  movie_banner: string;
  image: string;
  description: string;
}

export const FilmsContext = createContext({} as FilmsContextProps);

export function FilmsProvider({ children }: FilmsProviderProps) {
  const [dados, setDados] = useState([]);
  useEffect(() => {
    async function loadData() {
      const { data } = await api.get('/films');

      console.log(data);
      setDados(data);
      // setLoading(false);
    }
    loadData();
  }, []);
  return (
    <FilmsContext.Provider value={{ dados }}>{children}</FilmsContext.Provider>
  );
}

export const useSidebarDrawer = () => useContext(FilmsContext);
