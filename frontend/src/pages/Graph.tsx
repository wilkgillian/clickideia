import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useUser } from "../hooks/useUser";
import dynamic from "next/dynamic";
import { Flex, HStack, Text, VStack } from "@chakra-ui/react";
import MyCalendar from "../components/Calendar";
import CardsStatus from "../components/Cards/CardsStatus";

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
const options = {
  chart: {
    toolbar: {
      show: true,
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
    enabled: true,
  },
  tooltip: {
    enabled: true,
    theme: "dark",
  },
  xaxis: {
    categories: [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
  },
};

const chart1 = {
  series: [
    {
      name: "Esse ano",
      data: [48, 70, 20, 90, 36, 80, 30, 40, 20, 22, 12],
    },
    {
      name: "Ano passado",
      data: [40, 30, 70, 80, 40, 16, 40, 30, 50, 67, 27],
    },
  ],
  options: {
    chart: {
      foreColor: "white",
      dropShadow: {
        enabled: true,
        top: 1,
        left: 1,
        blur: 2,
        opacity: 0.2,
      },
    },
    tooltip: {
      enabled: true,
      theme: "dark",
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: [
        "Jan",
        "Fev",
        "Mar",
        "Mai",
        "Jun",
        "Jul",
        "Ago",
        "Set",
        "Out",
        "Nov",
        "Dez",
      ],
    },
    grid: {
      show: true,
    },
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
    <Layout>
      <VStack w="full">
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
        <HStack
          w="74%"
          gap={5}
          bgColor="gray.800"
          justifyContent="space-between"
        >
          <Chart
            options={chart1.options}
            series={chart1.series}
            type="line"
            width={600}
            height={350}
          />
          <VStack w="full" h="full" padding={4}>
            <Text
              fontSize={18}
              textAlign="center"
              color="teal"
              fontWeight="bold"
            >
              Quantidade de tarefas do ano passado
            </Text>
            <HStack w="full" justifyContent="space-between" padding={4}>
              <CardsStatus title={"Completas"} amount={4} />
              <CardsStatus title={"Definidas"} amount={4} />
              <CardsStatus title={"Nã realizadas"} amount={4} />
            </HStack>
            <Text
              fontSize={18}
              textAlign="center"
              color="teal"
              fontWeight="bold"
            >
              Quantidade de tarefas deste ano no mesmo período
            </Text>
            <HStack w="full" justifyContent="space-between" padding={4}>
              <CardsStatus title={"Completas"} amount={4} />
              <CardsStatus title={"Definidas"} amount={4} />
              <CardsStatus title={"Nã realizadas"} amount={4} />
            </HStack>
          </VStack>
        </HStack>
      </VStack>
      {/* <newChart /> */}
    </Layout>
  );
}
export default Graph;
