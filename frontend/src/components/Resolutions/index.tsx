import React, { useState, useEffect } from 'react';

import './styles.css';
import api from '../../services/api';

interface Data {
  platform: string;
  products: {
    productName: string;
    priceSold: string;
    priceProduct: string;
    stock: string;
    quantitySold: string;
    status: string;
  }[];
}

const Resolutions: React.FC = () => {
  const [sellers, setSellersData] = useState<Data[]>([]);

  async function getData() {
    const platforms = [];
    const responseMl = await api.post('/getProducts', {
      user: 'vtex',
      platform: 'mercadoLivre',
    });

    platforms.push(responseMl.data);

    const responseAmz = await api.post('/getProducts', {
      user: 'vtex',
      platform: 'amazon',
    });

    platforms.push(responseAmz.data);

    const responseAm = await api.post('/getProducts', {
      user: 'vtex',
      platform: 'americanas',
    });

    platforms.push(responseAm.data);

    setSellersData(platforms);
  }
  console.log(sellers);
  useEffect(() => {
    getData();
  }, []);

  return (
    <div id="stock">
      <div>
        <table className="table">
          <tr id="header">
            <th>Origem</th>
            <th>Nome do produto</th>
            <th>Preço de compra</th>
            <th>Quantidade</th>
            <th>Status</th>
          </tr>

          {sellers.map(seller => {
            return seller.products.map(sel => {
              if (sel.status !== 'complete') {
                return (
                  <tr>
                    <td>{seller.platform}</td>
                    <td>{sel.productName}</td>
                    <td>{sel.priceProduct}</td>
                    <td>{sel.stock}</td>
                    <td>{sel.status}</td>
                  </tr>
                );
              }
            });
          })}
        </table>
      </div>
    </div>
  );
};

export default Resolutions;
