import React from 'react';
import Product from './Product';

function ProductList(props) {
  return (
    <div className="container">
      {props.productList.map((product, index) => (
        <Product
          key={index}
          product={product}
          index={index}
          increamentQuantity={props.increamentQuantity}
          decreamentQuantity={props.decreamentQuantity}
        />
      ))}
    </div>
  );
}

export default ProductList;
