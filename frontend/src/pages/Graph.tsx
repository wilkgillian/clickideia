import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useUser } from "../hooks/useUser";
import { TasksProvider } from "../contexts/tasksContext";
import dynamic from "next/dynamic";
import { Flex, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import MyCalendar from "../components/Calendar";

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
const options = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: true,
    },
    foreColor: "white",
  },
  grid: {
    show: true,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: true,
    theme: "dark",
  },
  xaxis: {
    categories: [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
  },
};

const series = [
  {
    name: "essa semana",
    data: [1, 2, 1, 3, 0, 1, 2, 3, 3, 4, 5],
  },
  {
    name: "semana passada",
    data: [1, 9, 0, 3, 0, 1, 4, 6, 7, 4, 1],
  },
];

function Graph() {
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
        <VStack w="full">
          <Text>Semana atual x Semana anterior</Text>
          <HStack gap={4} borderRadius={10}>
            <Flex bg="gray.800">
              <Chart
                options={options}
                series={series}
                type="area"
                width={800}
                height={400}
              />
            </Flex>
            <Flex bg="gray.800">
              <MyCalendar />
            </Flex>
          </HStack>
        </VStack>
        <Chart
          options={options}
          series={series}
          type="histogram"
          width={600}
          height={400}
        />
      </Layout>
    </TasksProvider>
  );
}
export default Graph;
