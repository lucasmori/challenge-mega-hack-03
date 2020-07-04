import React from 'react';

import SidePanel from '../components/SidePanel';
import Chart from '../components/Chart';
import SalesTime from '../components/SalesTime';

// import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <>
      <SidePanel />
      <div className="grid">
        <Chart title="Vendas" displayTitle type="line" />
        <Chart title="Entregas" displayTitle type="pie" displayLegend />
        <SalesTime />
        {/* <Chart title="grafico numero 3" displayTitle /> */}
        <Chart title="grafico numero 4" displayTitle type="bar" />
        <Chart title="grafico numero 5" displayTitle type="bar" />
        <Chart title="grafico numero 6" displayTitle type="bar" />
      </div>
    </>
  );
};

export default Home;
