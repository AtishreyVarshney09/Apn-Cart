import React from 'react';

function Product(props) {
  const { product, index, incrementQuantity, decrementQuantity, removeProduct } = props;

  return (
    <div className="card mb-3 shadow-sm">
      <div className="card-body d-flex justify-content-between align-items-center">
        <div>
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">Price: ₹{product.price}</p>
          <p className="card-text">Quantity: {product.quantity}</p>
        </div>
        <div>
          <button
            className="btn btn-success me-2"
            onClick={() => incrementQuantity(index)}
          >
            +
          </button>
          <button
            className="btn btn-warning me-2"
            onClick={() => decrementQuantity(index)}
          >
            -
          </button>
          <button
            className="btn btn-danger"
            onClick={() => removeProduct(product.id)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
