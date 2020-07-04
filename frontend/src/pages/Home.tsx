import React from 'react';

import SidePanel from '../components/SidePanel';
import Chart from '../components/Chart';

// import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <>
      <SidePanel />
      <div className="grid">
        <Chart title="Vendas" displayTitle />
        <Chart title="Entregas" displayTitle />
        <Chart title="grafico numero 3" displayTitle />
        <Chart title="grafico numero 4" displayTitle />
        <Chart title="grafico numero 5" displayTitle />
        <Chart title="grafico numero 6" displayTitle />
      </div>
    </>
  );
};

export default Home;
