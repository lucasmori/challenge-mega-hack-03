import React, { useEffect, useState } from 'react';

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
interface Props {
  data: Data;
}

const ProductTableChart: React.FC<Props> = ({ data }) => {
  return (
    <div className="productChart">
      <h1>{data.platform}</h1>
      <div id="products">
        <div id="elem">
          {data.products.slice(0, 3).map(product => {
            return (
              <>
                <ul>
                  <h2>{product.productName}</h2>
                  <li>Estoque: {product.stock} </li>
                  <li>Preço do produto: {product.priceProduct}</li>
                  <li>Vendidos: {product.quantitySold} </li>
                  <li>Preço vendido: {product.priceSold} </li>
                  <li>
                    Lucro: R${' '}
                    {(
                      Number(product.priceSold) * Number(product.quantitySold)
                    ).toFixed(2)}{' '}
                  </li>
                </ul>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductTableChart;
