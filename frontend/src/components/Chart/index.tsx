/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';

import { Bar, Line, Pie } from 'react-chartjs-2';

import './styles.css';

interface Props {
  title: string;
  displayTitle?: boolean;
  displayLegend?: boolean;
  type: 'bar' | 'line' | 'pie';
}
const Chart: React.FC<Props> = ({
  title,
  displayTitle,
  displayLegend,
  type,
}) => {
  const [chartData, setChartData] = useState({});
  useEffect(() => {
    const data = {
      labels: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'],
      datasets: [
        {
          label: 'Vendas',
          data: [5000, 20000, 50000, 153000, 106000],
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
    };
    setChartData(data);
  }, [chartData]);

  return (
    <div className="chart">
      {type === 'bar' && (
        <Bar
          data={chartData}
          options={{
            animation: {
              duration: 5000,
            },
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
      )}
      {type === 'line' && (
        <Line
          data={chartData}
          options={{
            animation: {
              duration: 5000,
            },
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
            scales: {
              xAxes: [
                {
                  gridLines: {
                    drawOnChartArea: false,
                  },
                },
              ],
              yAxes: [
                {
                  gridLines: {
                    drawOnChartArea: false,
                  },
                },
              ],
            },
            // gridLines: {
            //   display: false,
            //   drawBorder: true,
            //   drawOnChartArea: false,
            // },
          }}
        />
      )}
      {type === 'pie' && (
        <Pie
          data={chartData}
          options={{
            animation: {
              duration: 5000,
            },
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
      )}
    </div>
  );
};

export default Chart;
