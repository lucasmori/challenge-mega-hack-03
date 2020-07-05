import React, { useEffect, useState } from 'react';

import SidePanel from '../components/SidePanel';
import Chart from '../components/Chart';
import SalesTime from '../components/SalesTime';
import ProductTableChart from '../components/ProductTableChart';

const Dashboard: React.FC = () => {
  const [salesChart, setSalesChart] = useState({});
  const [deliveriesChart, setDeliveriesChart] = useState({});

  const productData = [
    {
      platform: 'Mercado Livre',
      products: [
        {
          productName: 'produto 1',
          quantitySold: '2554',
          priceSold: '2',
          priceProduct: '2',
          stock: '3',
          status: 'complete ou returned',
        },
        {
          productName: 'produto 2',
          quantitySold: '2554',
          priceSold: '2',
          priceProduct: '2',
          stock: '3',
          status: 'complete ou returned',
        },
        {
          productName: 'produto 3',
          quantitySold: '2554',
          priceSold: '2',
          priceProduct: '2',
          stock: '3',
          status: 'complete ou returned',
        },
      ],
    },
    {
      platform: 'Amazon',
      products: [
        {
          productName: 'vassoura',
          quantitySold: '2554',
          priceSold: '2',
          priceProduct: '2',
          stock: '3',
          status: 'complete ou returned',
        },
      ],
    },
    {
      platform: 'Americanas',
      products: [
        {
          productName: 'x',
          quantitySold: '2554',
          priceSold: '2',
          priceProduct: '2',
          stock: '3',
          status: 'complete ou returned',
        },
      ],
    },
  ];

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

  /*
{
    "platform": "mercadoLivre",
    "productName": "x",
    "priceSold": "2",
    "priceProduct": "2",
    "stock": "3",
    "quantitySold": "ff",
    "status": "complete ou returned"
}
*/
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
        <Chart
          title="Vendas geral"
          displayTitle
          type="line"
          chartData={salesChart}
        />
        <Chart
          title="Lucro"
          displayTitle
          type="pie"
          displayLegend
          chartData={deliveriesChart}
        />

        <SalesTime />

        {productData.slice(0, 3).map(product => {
          return <ProductTableChart data={product} />;
        })}
      </div>
    </>
  );
};

export default Dashboard;
