import React from 'react';

import SidePanel from './components/sidePanel/sidePanel';
import GraphicPanel from './components/graphicPanel/graphicPanel';

import './App.css';

const App: React.FC = () => {
  return (
    <>
      <SidePanel />
      <GraphicPanel />
    </>
  );
};

export default App;
