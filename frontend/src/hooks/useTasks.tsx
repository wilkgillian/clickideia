import { useContext } from 'react';
import { TasksContext } from '../contexts/tasksContext';

export function useTasks() {
  const context = useContext(TasksContext);

  return context;
}
