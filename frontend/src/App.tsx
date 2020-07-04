import React from 'react';
import './App.css';

import SidePanel from './components/SidePanel';
import Chart from './components/Chart';

const App: React.FC = () => {
  return (
    <>
      <div className="container">
        <SidePanel />
        <Chart />
      </div>
    </>
  );
};

export default App;
