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
          {data.products.map(product => {
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
