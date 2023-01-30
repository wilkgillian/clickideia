import { useEffect } from 'react';
import Layout from '../components/Layout';
import { useTasks } from '../hooks/useTasks';

export default function HomePage() {
  const { loadTasks, tasks } = useTasks();
  useEffect(() => {
    const token = sessionStorage.getItem('token');
    loadTasks(token);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tasks]);
  return <Layout />;
}
