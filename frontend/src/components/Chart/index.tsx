import React, { useState } from 'react';

import { Bar } from 'react-chartjs-2';

import './styles.css';

interface Props {
  title: string;
  displayTitle?: boolean;
  displayLegend?: boolean;
}
const Chart: React.FC<Props> = ({ title, displayTitle, displayLegend }) => {
  const [chartData, setChartData] = useState({
    labels: [
      'Segunda-feira',
      'Terça-feira',
      'Quarta-feira',
      'Quinta-feira',
      'Sexta-feira',
    ],
    datasets: [
      {
        label: 'Population',
        data: [617594, 181045, 153060, 106519, 105162, 95072],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
          'rgba(255, 99, 132, 0.6)',
        ],
      },
    ],
  });
  return (
    <div className="chart">
      <Bar
        data={chartData}
        options={{
          maintainAspectRatio: false,
          title: {
            display: displayTitle || false,
            text: title,
            fontSize: 25,
          },
          legend: {
            display: displayLegend || false,
            position: 'right',
          },
        }}
      />
    </div>
  );
};

export default Chart;
