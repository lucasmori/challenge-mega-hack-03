import React from 'react';
import { FaBusinessTime, FaHome, FaTruck } from 'react-icons/fa';
import { MdDashboard } from 'react-icons/md';
import { GrMoney } from 'react-icons/gr';

import './styles.css';

const sidePanel: React.FC = () => {
  return (
    <div className="sidePanel">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/VTEX_Logo.svg/400px-VTEX_Logo.svg.png"
        alt="VTEX"
      />
      <a id="home" href="#">
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
        <GrMoney />
        Vendas
      </a>
      <hr />
      <a href="#">
        <FaTruck />
        Entregas
      </a>
      <hr />
    </div>
  );
};

export default sidePanel;
