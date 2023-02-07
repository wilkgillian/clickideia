import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { Box } from "@chakra-ui/react";
import { TasksProvider } from "../contexts/tasksContext";
import { useUser } from "../hooks/useUser";

function Users() {
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
      <Layout>
        <Box>Users</Box>
      </Layout>
    </TasksProvider>
  );
}

export default Users;
