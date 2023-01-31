import { useEffect } from "react";
import Layout from "../components/Layout";
import { useTasks } from "../hooks/useTasks";
import { useUser } from "../hooks/useUser";

export default function HomePage() {
  const { loadTasks } = useTasks();
  const { loadUser } = useUser();
  useEffect(() => {
    loadTasks();
    loadUser();
  }, []);

  return <Layout />;
}
