import React, { useState, useEffect } from 'react';

import { Bar, Line, Pie } from 'react-chartjs-2';

import './styles.css';

interface Props {
  title: string;
  displayTitle?: boolean;
  displayLegend?: boolean;
  type: 'bar' | 'line' | 'pie';
  chartData: unknown;
}
const Chart: React.FC<Props> = ({
  title,
  displayTitle,
  displayLegend,
  type,
  chartData,
}) => {
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
              defaultFontFamily: "'Ubuntu'",
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
            responsive: true,
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
