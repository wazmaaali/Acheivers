import React, { useState } from "react";
import "../assets/css/fontawesome.min.css";
import "../assets/css/default.css";
import "../assets/css/style.css";
import "../assets/css/responsive.css";
import { Link } from "react-router-dom";
import data from "./data";

function Cart() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const shippingPrice = 10;
  const totalPrice = itemsPrice + shippingPrice;

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <div className="cart-parent">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Link to="/">
          <h1>{"< Back"}</h1>
        </Link>
        <h1>All Products</h1>
        <h1></h1>
      </div>
      <div className="cart-container">
        <div className="left">
          <div className="product-items-container">
            {products.map((product) => (
              <div className="product-item">
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <div>${product.price}</div>
                <div>
                  <button onClick={() => onAdd(product)}>Add To Cart</button>
                </div>             
              </div>
            ))}
          </div>
        </div>

        
  );
}
export default Cart;
