import { createContext, ReactNode, useContext, useState } from "react";
import { api } from "../services/api";
import { useUser } from "../hooks/useUser";
import { toast } from "react-toastify";

interface TasksProviderProps {
  children: ReactNode;
  token: string | null;
}

interface TasksContextProps {
  tasks: TasksProps[];
  loadTasks: () => void;
  handleCreateTask: (data: CreateTasksProps) => Promise<void>;
  handleEditTask: (id: string, data: EditTasksProps) => Promise<void>;
  handleDeleteTask: (id: string) => Promise<void>;
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
interface CreateTasksProps {
  userId: string;
  title: string;
  content: string;
  list: string;
}
interface EditTasksProps {
  title: string;
  content: string;
  list: string;
  status: string;
}

export const TasksContext = createContext({} as TasksContextProps);

export function TasksProvider({ children, token }: TasksProviderProps) {
  // const token = localStorage.getItem("token");
  const { user } = useUser();
  const [tasks, setTasks] = useState([]);
  async function loadTasks() {
    if (!token) {
      return;
    }

    const userId = user.id;
    const { data } = await api.get("/cards/cards_user", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        userId: userId,
      },
    });
    setTasks(data);
  }
  async function handleCreateTask(data: CreateTasksProps) {
    if (!data.title || !data.content || !data.list || !data.userId) {
      toast.error("Falha ao adicionar tarefa", {
        theme: "dark",
      });
      return;
    }
    try {
      await api.post("/cards/", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Tarefa adicionada com sucesso!", {
        theme: "dark",
      });
      loadTasks();
    } catch {
      toast.error("Falha ao adicionar tarefa!", {
        theme: "dark",
      });
    }
  }
  async function handleGetOneTask(id: string) {
    const { data } = await api.get(`/cards/card/${id}`, {
      data: {
        id: id,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  }

  async function handleEditTask(id: string, data: EditTasksProps) {
    const taskAlreadyExists = await handleGetOneTask(id);

    if (taskAlreadyExists) {
      await api.put(`/cards/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    }
    loadTasks();
  }
  async function handleDeleteTask(id: string) {
    await api.delete(`/cards/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        id: id,
      },
    });
    loadTasks();
  }

  return (
    <TasksContext.Provider
      value={{
        tasks,
        handleCreateTask,
        handleEditTask,
        handleDeleteTask,
        loadTasks,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
}

export const useSidebarDrawer = () => useContext(TasksContext);
