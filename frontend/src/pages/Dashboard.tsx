import React, { useEffect, useState } from 'react';

import SidePanel from '../components/SidePanel';
import Chart from '../components/Chart';
import SalesTime from '../components/SalesTime';
import ProductTableChart from '../components/ProductTableChart';
import api from '../services/api';

interface Data {
  platform: string;
  products: {
    productName: string;
    priceSold: string;
    priceProduct: string;
    stock: string;
    quantitySold: string;
    status: string;
  }[];
}

const Dashboard: React.FC = () => {
  const [salesChart, setSalesChart] = useState({});
  const [deliveriesChart, setDeliveriesChart] = useState({});
  const [sellers, setSellersData] = useState<Data[]>([]);
  const [loading, setLoading] = useState(false);

  async function getData() {
    setLoading(true);
    const platforms = [];
    const responseMl = await api.post('/getProducts', {
      user: 'vtex',
      platform: 'mercadoLivre',
    });

    platforms.push(responseMl.data);

    const responseAmz = await api.post('/getProducts', {
      user: 'vtex',
      platform: 'amazon',
    });

    platforms.push(responseAmz.data);

    const responseAm = await api.post('/getProducts', {
      user: 'vtex',
      platform: 'americanas',
    });

    platforms.push(responseAm.data);

    setSellersData(platforms);
    setLoading(false);
  }
  useEffect(() => {
    getData();
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

        {loading ? (
          <>
            <div className="productChart" />
            <div className="productChart" />
            <div className="productChart" />
          </>
        ) : (
          sellers.slice(0, 3).map(product => {
            return <ProductTableChart data={product} />;
          })
        )}
      </div>
    </>
  );
};

export default Dashboard;
