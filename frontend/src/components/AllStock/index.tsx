import React, { useEffect, useState } from 'react';

import './styles.css';
import api from '../../services/api';

interface Product {
  platform: string;
  productName: string;
  priceProduct: string;
  quantityBought: string;
  status: string;
}
const AllStock: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    api
      .post('/getProducts', {
        user: 'vtex',
        platform: 'aliexpress',
      })
      .then(response => {
        setProducts(response.data.products);
      });
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
          {products.map(product => {
            return (
              <tr className="item">
                <td>{product.platform}</td>
                <td>{product.productName}</td>
                <td>{product.priceProduct}</td>
                <td>{product.quantityBought}</td>
                <td>{product.status}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default AllStock;
