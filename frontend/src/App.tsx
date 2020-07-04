import React from 'react';
import './App.css';

import SidePanel from './components/SidePanel';
import Chart from './components/Chart';

const App: React.FC = () => {
  return (
    <>
      <div className="container">
        <SidePanel />
        <div className="grid">
          <Chart title="grafico numero 1" displayTitle />
          <Chart title="grafico numero 2" displayTitle />
          <Chart title="grafico numero 3" displayTitle />
          <Chart title="grafico numero 4" displayTitle />
          <Chart title="grafico numero 5" displayTitle />
          <Chart title="grafico numero 6" displayTitle />
        </div>
      </div>
    </>
  );
};

export default App;
