import React, { useState, useEffect } from 'react';

import './styles.css';

import api from '../../services/api';

interface Data {
  platform: string;
  products: {
    productName: string;
    quantitySold: string;
    priceSold: string;
    priceProduct: string;
    stock: string;
    status: string;
  }[];
}

interface DataProducts {
  productName: string;
  quantitySold: string;
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
        platform: 'Mercado Livre',
        products: [
          {
            productName: 'x',
            quantitySold: '2554',
            priceSold: '2',
            priceProduct: '2',
            stock: '3',
            status: 'complete ou returned',
          },
        ],
      },
*/

  function addQuantitySold() {}

  useEffect(() => {
    // const response = api.get('posts');
    const response = [
      {
        platform: 'Mercado Livre',
        products: [
          {
            productName: 'x',
            quantitySold: '2554',
            priceSold: '2',
            priceProduct: '2',
            stock: '3',
            status: 'complete ou returned',
          },
          {
            productName: 'x',
            quantitySold: '2554',
            priceSold: '2',
            priceProduct: '2',
            stock: '3',
            status: 'complete ou returned',
          },
          {
            productName: 'x',
            quantitySold: '2554',
            priceSold: '2',
            priceProduct: '2',
            stock: '3',
            status: 'complete ou returned',
          },
        ],
      },
      {
        platform: 'Amazon',
        products: [
          {
            productName: 'x',
            quantitySold: '254',
            priceSold: '2',
            priceProduct: '2',
            stock: '3',
            status: 'complete ou returned',
          },
          {
            productName: 'x',
            quantitySold: '254',
            priceSold: '2',
            priceProduct: '2',
            stock: '3',
            status: 'complete ou returned',
          },
        ],
      },
      {
        platform: 'Americanas',
        products: [
          {
            productName: 'x',
            quantitySold: '2554',
            priceSold: '25',
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

  function calculateQuantitySold(seller: Data) {
    let soma = 0.0;
    seller.products.map(product => {
      soma += Number(product.quantitySold);
    });
    return soma;
  }

  return (
    <div id="allSales">
      <div>
        {platformShow ? (
          <table className="table">
            <tr id="header">
              <th>Plataforma</th>
              <th>Quantidade vendida</th>
            </tr>
            {sellers.map(seller => {
              return (
                <tr
                  className="item"
                  onClick={() => showPlatformProducts(seller.platform)}
                >
                  <td>{seller.platform}</td>
                  <td>{calculateQuantitySold(seller)}</td>
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
              <th>Quantidade Vendida</th>
              <th>Preço de venda</th>
              <th>Preço de compra</th>
              <th>Estoque</th>
              <th>Status</th>
            </tr>
            {products.map(product => {
              return (
                <tr className="item" onClick={() => setPlatformShow(true)}>
                  <td>{product.productName}</td>
                  <td>{product.quantitySold}</td>
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
