import React, { useEffect, useState } from 'react';

import SidePanel from '../components/SidePanel';
import Chart from '../components/Chart';
import SalesTime from '../components/SalesTime';

const Dashboard: React.FC = () => {
  const [salesChart, setSalesChart] = useState({});
  const [deliveriesChart, setDeliveriesChart] = useState({});

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
    setSalesChart(data);
  }, []);

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
    setDeliveriesChart(data);
  }, []);

  return (
    <>
      <SidePanel />
      <div className="grid">
        <Chart title="Vendas" displayTitle type="line" chartData={salesChart} />
        <Chart
          title="Entregas"
          displayTitle
          type="pie"
          displayLegend
          chartData={deliveriesChart}
        />
        <SalesTime />

        <Chart
          title="grafico numero 4"
          displayTitle
          type="bar"
          chartData={salesChart}
        />
        <Chart
          title="grafico numero 5"
          displayTitle
          type="bar"
          chartData={salesChart}
        />
        <Chart
          title="grafico numero 6"
          displayTitle
          type="bar"
          chartData={salesChart}
        />
      </div>
    </>
  );
};

export default Dashboard;
