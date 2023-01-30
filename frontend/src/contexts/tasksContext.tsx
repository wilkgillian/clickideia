import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../services/api";
import { useUser } from "../hooks/useUser";

interface TasksProviderProps {
  children: ReactNode;
}

interface TasksContextProps {
  tasks: TasksProps[];
  handleCreateTask: (data: TasksProps) => Promise<void>;
  handleEditTask: (id: string, data: TasksProps) => Promise<void>;
  handleDeleteTask: (id: string, data: TasksProps) => Promise<void>;
}

interface TasksProps {
  id: string;
  title: string;
  status: string;
  content: string;
  userId: string;
  list: string;
  created_at: string;
}

export const TasksContext = createContext({} as TasksContextProps);

export function TasksProvider({ children }: TasksProviderProps) {
  const { user } = useUser();
  const [tasks, setTasks] = useState([]);
  async function loadTasks(userToken: string | null) {
    const userId = user.id;
    const { data } = await api.get("/cards/cards_user", {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
      data: {
        userId: userId,
      },
    });
    setTasks(data);
  }
  async function handleCreateTask(data: TasksProps) {
    await api.post("/cards/", {
      data: {
        title: data.title,
        content: data.content,
        userId: data.userId,
        list: data.list,
      },
    });
  }
  async function handleGetOneTask(id: string) {
    const { data } = await api.post("/cards/card", {
      data: {
        id: id,
      },
    });
    return data;
  }
  // async function handleGetTasks(id: string) {
  //   const { data } = await api.post("/cards/card", {
  //     data: {
  //       id: id,
  //     },
  //   });
  //   return data;
  // }

  async function handleEditTask(id: string, data: TasksProps) {
    const taskAlreadyExists = await handleGetOneTask(id);
    if (taskAlreadyExists) {
      await api.put("/cards/", {
        data: {
          title: data.title ? data.title : taskAlreadyExists.title,
          content: data.content ? data.content : taskAlreadyExists.content,
          list: data.list ? data.list : taskAlreadyExists.list,
          status: data.status ? data.status : taskAlreadyExists.status,
        },
      });
    }
  }
  async function handleDeleteTask(id: string) {
    const taskAlreadyExists = await handleGetOneTask(id);
    if (taskAlreadyExists) {
      await api.delete("/cards/", {
        data: {
          id: id,
        },
      });
    }
  }
  useEffect(() => {
    const userToken = sessionStorage.getItem("token");
    loadTasks(userToken);
  }, [tasks]);
  return (
    <TasksContext.Provider
      value={{ tasks, handleCreateTask, handleEditTask, handleDeleteTask }}
    >
      {children}
    </TasksContext.Provider>
  );
}

export const useSidebarDrawer = () => useContext(TasksContext);
