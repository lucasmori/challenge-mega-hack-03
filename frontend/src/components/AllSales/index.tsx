import React, { useState, useEffect } from 'react';

import './styles.css';
import { FaFileExcel } from 'react-icons/fa';

interface Data {
  platform: string;
  quantitySold: string;
  problems: string;
  products: {
    productName: string;
    priceSold: string;
    priceProduct: string;
    stock: string;
    status: string;
  }[];
}

interface DataProducts {
  productName: string;
  priceSold: string;
  priceProduct: string;
  stock: string;
  status: string;
}

const AllSales: React.FC = () => {
  const [sellers, setSellersData] = useState<Data[]>([]);
  const [products, setProducts] = useState<DataProducts[]>([]);
  const [platformShow, setPlatformShow] = useState(true);
  /*
{
    "platform": "mercadoLivre",
    "productName": "x",
    "priceSold": "2",
    "priceProduct": "2",
    "stock": "3",
    "quantitySold": "ff",
    "status": "complete ou returned"
}
*/
  useEffect(() => {
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
        platform: 'Amazon',
        quantitySold: '5157',
        problems: '75',
        products: [
          {
            productName: 'dsgdsfds',
            priceSold: '515',
            priceProduct: '5145',
            stock: '5444',
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
        platform: 'Uber',
        quantitySold: '123',
        problems: '88',
        products: [
          {
            productName: 'mercado',
            priceSold: '2',
            priceProduct: '2',
            stock: '3',
            status: 'complete ou returned',
          },
        ],
      },
    ];
    setSellersData(response);
  }, []);

  function showPlatformProducts(platform: string) {
    sellers.map(seller => {
      if (seller.platform === platform) {
        setPlatformShow(false);
        return setProducts(seller.products);
      }
      return false;
    });
  }

  return (
    <div id="allSales">
      <div>
        {platformShow ? (
          <table className="table">
            <tr id="header">
              <th>Plataforma</th>
              <th>Quantidade vendida</th>
              <th>Problemas</th>
            </tr>
            {sellers.map(seller => {
              return (
                <tr
                  className="item"
                  onClick={() => showPlatformProducts(seller.platform)}
                >
                  <td>{seller.platform}</td>
                  <td>{seller.quantitySold}</td>
                  <td>{seller.problems}</td>
                </tr>
              );
            })}
          </table>
        ) : (
          <div />
        )}
        {!platformShow ? (
          <table className="table" id="platformDetail">
            <tr id="header">
              <th>Nome do produto</th>
              <th>Preço de venda</th>
              <th>Preço de compra</th>
              <th>Estoque</th>
              <th>Status</th>
            </tr>
            {products.map(product => {
              return (
                <tr className="item" onClick={() => setPlatformShow(true)}>
                  <td>{product.productName}</td>
                  <td>{product.priceSold}</td>
                  <td>{product.priceProduct}</td>
                  <td>{product.stock}</td>
                  <td>{product.status}</td>
                </tr>
              );
            })}
          </table>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
};

export default AllSales;
