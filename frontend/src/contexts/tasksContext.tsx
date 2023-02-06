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
  handleSetTask: (id: string, status: string) => Promise<void>;
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
    try {
      if (taskAlreadyExists) {
        await api.put(`/cards/${id}`, data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      }
      toast.success("Tarefa editada com sucesso!", {
        theme: "dark",
      });
      loadTasks();
    } catch {
      toast.error("Falha ao editar tarefa!", {
        theme: "dark",
      });
    }
  }
  async function handleDeleteTask(id: string) {
    try {
      await api.delete(`/cards/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Tarefa deletada com sucesso!", {
        theme: "dark",
      });
      loadTasks();
    } catch {
      toast.error("Falha ao deletar tarefa!", {
        theme: "dark",
      });
    }
  }
  async function handleSetTask(id: string, status: string) {
    const taskAlreadyExists = await handleGetOneTask(id);
    const data = {
      status: status,
    };
    try {
      if (taskAlreadyExists) {
        await api.put(`/cards/${id}`, data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      }
      toast.success("Tarefa alterada com sucesso!", {
        theme: "dark",
      });
      loadTasks();
    } catch {
      toast.error("Falha ao alterar tarefa!", {
        theme: "dark",
      });
    }
  }

  return (
    <TasksContext.Provider
      value={{
        tasks,
        handleCreateTask,
        handleEditTask,
        handleDeleteTask,
        loadTasks,
        handleSetTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
}

export const useSidebarDrawer = () => useContext(TasksContext);
