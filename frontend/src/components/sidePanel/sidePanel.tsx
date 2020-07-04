import React from 'react';
import { FaBusinessTime } from 'react-icons/fa';
import { MdDashboard } from 'react-icons/md';
import './sidePanel.css';

const sidePanel: React.FC = () => {
  return (
    <div id="sidePanel">
      <FaBusinessTime />
      <hr />
      <div>
        <MdDashboard />
        <a href="#">Dashboard</a>
      </div>
      <hr />
      <a href="#">Vendas</a>
      <hr />
      <a href="#">Entregas</a>
      <hr />
      <a href="#">Dashboard</a>
      <hr />
      <a href="#">Dashboard</a>
      <hr />
      <a href="#">Dashboard</a>
      <hr />
      <a href="#">Dashboard</a>
      <hr />
      <a href="#">Dashboard</a>
      <hr />
      <a href="#">Dashboard</a>
      <hr />
      <a href="#">Dashboard</a>
      <hr />
    </div>
  );
};

export default sidePanel;
