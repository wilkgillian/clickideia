import { Box, Text } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";

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
  const router = useRouter();
  return (
    <Box
      w="full"
      h="full"
      borderRadius={5}
      bg="gray.800"
      p={5}
      overflowY="auto"
      css={{
        "&::-webkit-scrollbar": {
          width: "4px",
        },
        "&::-webkit-scrollbar-track": {
          width: "6px",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "#2C3440",
          borderRadius: "24px",
        },
      }}
    >
      {router.pathname == "/Graph" ? (
        <Text color="teal">Gráfico de progresso</Text>
      ) : (
        <Link passHref href="/Graph">
          <Text color="teal">Gráfico de progresso</Text>
        </Link>
      )}
      <Chart options={options} series={series} type="area" />
    </Box>
  );
}

export default Graph;
