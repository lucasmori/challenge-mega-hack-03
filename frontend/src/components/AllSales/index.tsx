import React, { useState, useEffect } from 'react';

import './styles.css';
import { FaFileExcel } from 'react-icons/fa';

interface Data {
  platform: string;
  productName: string;
  priceSold: string;
  priceProduct: string;
  stock: string;
  quantitySold: string;
  status: string;
}
const AllSales: React.FC = () => {
  const [sellers, setSellersData] = useState<Data[]>([]);

  useEffect(() => {
    const response = [
      {
        platform: 'Mercado Livre',
        productName: 'x',
        priceSold: '2',
        priceProduct: '2',
        stock: '3',
        quantitySold: 'ff',
        status: 'complete ou returned',
      },
      {
        platform: 'Mercado Livre',
        productName: 'x',
        priceSold: '2',
        priceProduct: '2',
        stock: '3',
        quantitySold: 'ff',
        status: 'complete ou returned',
      },
      {
        platform: 'Mercado Livre',
        productName: 'x',
        priceSold: '2',
        priceProduct: '2',
        stock: '3',
        quantitySold: 'ff',
        status: 'complete ou returned',
      },
      {
        platform: 'Mercado Livre',
        productName: 'x',
        priceSold: '2',
        priceProduct: '2',
        stock: '3',
        quantitySold: 'ff',
        status: 'complete ou returned',
      },
      {
        platform: 'Mercado Livre',
        productName: 'x',
        priceSold: '2',
        priceProduct: '2',
        stock: '3',
        quantitySold: 'ff',
        status: 'complete ou returned',
      },
      {
        platform: 'Mercado Livre',
        productName: 'x',
        priceSold: '2',
        priceProduct: '2',
        stock: '3',
        quantitySold: 'ff',
        status: 'complete ou returned',
      },
    ];
    setSellersData(response);
  }, []);

  return (
    <div id="allSales">
      <div>
        <table className="table">
          <tr id="header">
            <th>Plataforma</th>
            <th>Quantidade vendida</th>
            <th>Problemas</th>
          </tr>
          {sellers.map(seller => {
            return (
              <tr className="item">
                <td>{seller.platform}</td>
                <td>Dado2</td>
                <td>Dado3</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default AllSales;
