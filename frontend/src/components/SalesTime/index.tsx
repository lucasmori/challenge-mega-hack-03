import React, { useState, useEffect } from 'react';

import './styles.css';

const SalesTime: React.FC = () => {
  const [products, setProducts] = useState(0);
  const [cost, setCost] = useState(0);

  useEffect(() => {
    let soma = 0;
    const response = [
      {
        platform: 'Mercado Livre',
        quantitySold: '255448',
        problems: '99',
        products: [
          {
            productName: 'x',
            priceSold: '2',
            priceProduct: '2',
            stock: '3',
            status: 'complete ou returned',
          },
        ],
      },
      {
        platform: 'Mercado Livre',
        quantitySold: '255448',
        problems: '99',
        products: [
          {
            productName: 'x',
            priceSold: '2',
            priceProduct: '2',
            stock: '3',
            status: 'complete ou returned',
          },
        ],
      },
      {
        platform: 'Mercado Livre',
        quantitySold: '255448',
        problems: '99',
        products: [
          {
            productName: 'x',
            priceSold: '2',
            priceProduct: '2',
            stock: '5',
            status: 'complete ou returned',
          },
        ],
      },
    ];
    response.forEach(platform => {
      platform.products.forEach(product => {
        soma += Number(product.priceProduct) * Number(product.stock);
      });
    });
    setCost(soma);
  }, []);

  useEffect(() => {
    function time() {
      setTimeout(async () => {
        const number = (await Math.floor(Math.random() * 10000)) / 8;

        setProducts(Number(number.toFixed(2)));
      }, 5000);
    }
    time();
  }, [products]);

  return (
    <div className="averageSellingTime">
      <h1>Custo operacional</h1>
      <p>
        R$
        <span> {`${cost},00`} </span>
      </p>
    </div>
  );
};

export default SalesTime;
