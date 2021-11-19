import { Box, Text } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import React from 'react';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface ChartProps {
  title: string;
  options: any;
  series: any;
  height?: 160;
}

export default function ChartComponent({
  title,
  options,
  series,
  height,
}: ChartProps) {
  return (
    <Box p={['6', '8']} bg="gray.800" borderRadius={8} pb="4">
      <Text fontSize="lg" mb="4">
        {title}
      </Text>
      <Chart options={options} series={series} type="area" height={height} />
    </Box>
  );
}
