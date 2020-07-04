import React from 'react';
import { FaBusinessTime, FaHome } from 'react-icons/fa';
import { MdDashboard } from 'react-icons/md';
import { GrMoney } from 'react-icons/gr';

import './styles.css';

const sidePanel: React.FC = () => {
  return (
    <div className="sidePanel">
      <a href="#">
        <FaHome />
        Início
      </a>
      <hr />
      <a className="align" href="#">
        <MdDashboard />
        Dashboard
      </a>
      <hr />
      <a href="#">
        <MdDashboard />
        Vendas
      </a>
      <hr />
      <a href="#">
        <MdDashboard />
        Entregas
      </a>
      <hr />
      <a href="#">
        <MdDashboard />
        Dashboard
      </a>
      <hr />
      <a href="#">
        <MdDashboard />
        Dashboard
      </a>
      <hr />
      <a href="#">
        <MdDashboard />
        Dashboard
      </a>
      <hr />
      <a href="#">
        <MdDashboard />
        Dashboard
      </a>
      <hr />
      <a href="#">
        <MdDashboard />
        Dashboard
      </a>
      <hr />
      <a href="#">
        <MdDashboard />
        Dashboard
      </a>
    </div>
  );
};

export default sidePanel;
