import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Product from './components/Product';
import Footer from './components/Footer';
import AddItem from './components/AddItem';

function App() {
  const initialProducts = [
    { id: 1, name: "iPhone 15 Pro", price: 99999, quantity: 1 },
    { id: 2, name: "Samsung S23 Ultra", price: 75999, quantity: 2 },
    { id: 3, name: "OnePlus 12", price: 55999, quantity: 1 },
  ];

  const [productList, setProductList] = useState(initialProducts);
  const [totalAmount, setTotalAmount] = useState(calculateTotal(initialProducts));

  // Function to calculate total price
  function calculateTotal(list) {
    return list.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  // Increase quantity
  const incrementQuantity = (index) => {
    const newList = [...productList];
    newList[index].quantity += 1;
    setProductList(newList);
    setTotalAmount(calculateTotal(newList));
  };

  // Decrease quantity
  const decrementQuantity = (index) => {
    const newList = [...productList];
    if (newList[index].quantity > 1) {
      newList[index].quantity -= 1;
      setProductList(newList);
      setTotalAmount(calculateTotal(newList));
    }
  };

  // Remove item from cart
  const removeProduct = (id) => {
    const newList = productList.filter(product => product.id !== id);
    setProductList(newList);
    setTotalAmount(calculateTotal(newList));
  };

  // Add new item
  const addItem = (name, price) => {
    const newProductList = [...productList];
    newProductList.push({
      id: Date.now(), // unique ID
      name: name,
      price: price,
      quantity: 1,
    });
    setProductList(newProductList);
    setTotalAmount(calculateTotal(newProductList));
  };

  return (
    <div>
      <Navbar />

      <div className="container mt-4">
        <h2 className="mb-4 text-center">🛒 Apna Cart</h2>

        <AddItem addItem={(item) => {
          setProductList([...productList, item]); // assuming you use useState
        }} />


        {productList.length === 0 ? (
          <div className="alert alert-warning text-center" role="alert">
            <h4 className="alert-heading">Oops! Your cart is empty 😢</h4>
            <p>Add some products to start shopping!</p>
          </div>
        ) : (
          productList.map((product, index) => (
            <Product
              key={product.id}
              index={index}
              product={product}
              incrementQuantity={incrementQuantity}
              decrementQuantity={decrementQuantity}
              removeProduct={removeProduct}
            />
          ))
        )}

        <hr />
        <h4 className="text-end">Total Amount: ₹ {totalAmount}</h4>
      </div>

      <Footer />
    </div>
  );
}

export default App;
