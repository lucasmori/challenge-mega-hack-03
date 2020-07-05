import React, { useEffect, useState } from 'react';

import './styles.css';
/*
{
    "platform": "mercadoLivre",
    "productName": "x",
    "priceProduct": "2",
    "quantity": "3",
    "quantityBought": "ff",
    "status": "in stock ou em trânsito+"
}
*/
interface Product {
  platform: string;
  productName: string;
  priceProduct: string;
  quantity: string;
  quantityBought: string;
  status: string;
}
const AllStock: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const response = [
      {
        platform: 'mercadoLivre',
        productName: 'x',
        priceProduct: '2',
        quantity: '3',
        quantityBought: 'ff',
        status: 'in stock ou em trânsito+',
      },
    ];
    setProducts(response);
  }, []);

  return (
    <div id="stock">
      <div>
        <table className="table">
          <tr id="header">
            <th>Nome do produto</th>
            <th>Preço de venda</th>
            <th>Preço de compra</th>
            <th>Estoque</th>
            <th>Status</th>
          </tr>
          {products.map(product => {
            return (
              <tr className="item">
                <td>{product.productName}</td>
                <td>{product.quantity}</td>
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
