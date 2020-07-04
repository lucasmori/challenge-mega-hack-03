import React from 'react';

import SidePanel from './components/sidePanel/sidePanel';

import './App.css';
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
