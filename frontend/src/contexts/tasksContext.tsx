import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react';
import { api } from '../services/api';

interface TasksProviderProps {
  children: ReactNode;
}

interface TasksContextProps {
  dados: TasksProps[];
  loading: boolean;
}

interface TasksProps {
  id: string;
  title: string;
  description: string;
  producer: string;
  director: string;
  duration: number;
  rt_score: number;
  genre: string;
  movie_banner: string;
  image: string;
  running_time: string;
  release_date: string;
}

export const TasksContext = createContext({} as TasksContextProps);

export function TasksProvider({ children }: TasksProviderProps) {
  const [dados, setDados] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function loadData() {
      const { data } = await api.get('/films');
      setDados(data);
    }
    loadData();
    setLoading(false);
  }, [dados]);
  return (
    <TasksContext.Provider value={{ dados, loading }}>
      {children}
    </TasksContext.Provider>
  );
}

export const useSidebarDrawer = () => useContext(TasksContext);
