import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useUser } from "../hooks/useUser";
import { TasksProvider } from "../contexts/tasksContext";

export default function HomePage() {
  const { loadUser } = useUser();
  const [token, setToken] = useState<string | null>("");
  useEffect(() => {
    loadUser();
    const token = localStorage.getItem("token");
    setToken(token);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TasksProvider token={token}>
      <Layout />
    </TasksProvider>
  );
}
