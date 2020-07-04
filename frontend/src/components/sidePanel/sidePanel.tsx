import React from 'react';
import { FaBusinessTime } from 'react-icons/fa';
import { MdDashboard } from 'react-icons/md';
import './sidePanel.css';

const sidePanel: React.FC = () => {
  return (
    <div className="sidePanel">
      <a href="#">
        <FaBusinessTime />
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
