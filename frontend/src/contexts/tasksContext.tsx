import { createContext, ReactNode, useContext, useState } from 'react';
import { api } from '../services/api';
import { useUser } from '../hooks/useUser';

interface TasksProviderProps {
  children: ReactNode;
}

interface TasksContextProps {
  tasks: TasksProps[];
  loadTasks: (token: string | null) => void;
  handleCreateTask: (
    data: CreateTasksProps,
    userToken: string
  ) => Promise<void>;
  handleEditTask: (id: string, data: TasksProps) => Promise<void>;
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

export const TasksContext = createContext({} as TasksContextProps);

export function TasksProvider({ children }: TasksProviderProps) {
  const [token, setToken] = useState('');
  const { user } = useUser();
  const [tasks, setTasks] = useState([]);
  async function loadTasks(userToken: string | null) {
    if (!userToken) {
      return;
    }
    setToken(userToken);
    const userId = user.id;
    const { data } = await api.get('/cards/cards_user', {
      headers: {
        Authorization: `Bearer ${userToken}`
      },
      data: {
        userId: userId
      }
    });
    setTasks(data);
  }
  async function handleCreateTask(data: CreateTasksProps, userToken: string) {
    // console.log(data, token);
    await api.post('/cards/', {
      headers: {
        Authorization: `Bearer ${userToken}`
      },
      data: {
        userId: data.userId,
        title: data.title,
        content: data.content,
        list: data.list
      }
    });
  }
  async function handleGetOneTask(id: string) {
    const { data } = await api.get('/cards/card', {
      headers: {
        Authorization: `Bearer ${token}`
      },
      data: {
        id: id
      }
    });
    return data;
  }

  async function handleEditTask(id: string, data: TasksProps) {
    const taskAlreadyExists = await handleGetOneTask(id);
    if (taskAlreadyExists) {
      await api.put('/cards/', {
        headers: {
          Authorization: `Bearer ${token}`
        },
        data: {
          title: data.title ? data.title : taskAlreadyExists.title,
          content: data.content ? data.content : taskAlreadyExists.content,
          list: data.list ? data.list : taskAlreadyExists.list,
          status: data.status ? data.status : taskAlreadyExists.status
        }
      });
    }
  }
  async function handleDeleteTask(id: string) {
    const taskAlreadyExists = await handleGetOneTask(id);
    if (taskAlreadyExists) {
      await api.delete('/cards/', {
        headers: {
          Authorization: `Bearer ${token}`
        },
        data: {
          id: id
        }
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
        loadTasks
      }}
    >
      {children}
    </TasksContext.Provider>
  );
}

export const useSidebarDrawer = () => useContext(TasksContext);
