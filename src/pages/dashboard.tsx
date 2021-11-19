import React from 'react';
import { Flex, SimpleGrid } from '@chakra-ui/react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import ChartComponent from '../components/Chart';
import { options, series, series2 } from '../services/ChartValues';

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
          <ChartComponent
            title="Inscritos da semana"
            options={options}
            series={series}
          />

          <ChartComponent
            title="Taxa de abertura"
            options={options}
            series={series2}
          />
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
