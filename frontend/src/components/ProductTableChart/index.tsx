import React from 'react';

import './styles.css';

interface DataDTO {
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
interface Props {
  data: DataDTO;
}

const ProductTableChart: React.FC<Props> = ({ data }) => {
  return (
    <div id="productChart">
      <h1>{data.platform}</h1>
      <div id="products">
        <div id="elem">
          {data.products.map(e => {
            return (
              <>
                <ul>
                  <h2>{e.productName}</h2>
                  <li>Estoque: </li>
                  <li>Preço do produto: </li>
                  <li>Vendidos: </li>
                  <li>Preço vendido: </li>
                  <li>Lucro: </li>
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
