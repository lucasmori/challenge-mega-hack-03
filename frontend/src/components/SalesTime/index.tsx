/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';

// import { Container } from './styles';

const SalesTime: React.FC = () => {
  const [data, setData] = useState(0);

  // setTimeout(() => {
  //   const e = Math.floor(Math.random() * 100) / 8;

  //   setData(e);
  // }, 3000);

  return (
    <div>
      <p>
        Tempo médio de vendas
        <span> {data} </span>
        produtos/hora
      </p>
    </div>
  );
};

export default SalesTime;
