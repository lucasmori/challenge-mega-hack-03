import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaTruck, FaCoins } from 'react-icons/fa';
import { MdDashboard } from 'react-icons/md';

import './styles.css';

const SidePanel: React.FC = () => {
  return (
    <div className="sidePanel">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/VTEX_Logo.svg/400px-VTEX_Logo.svg.png"
        alt="VTEX"
      />
      <Link to="/">
        <FaHome />
        Início
      </Link>
      <Link to="/dashboard">
        <MdDashboard />
        Dashboard
      </Link>
      <Link to="/stock">
        <FaCoins />
        Compras
      </Link>
      <Link to="/sales">
        <FaCoins />
        Vendas
      </Link>
      <Link to="/resolutions">
        <FaTruck />
        Resoluções
      </Link>
    </div>
  );
};

export default SidePanel;
