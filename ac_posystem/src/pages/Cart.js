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

        <div className="right">
          <h2>Cart Items</h2>
          <div>
            {cartItems.length === 0 && (
              <div>
                <img
                  src="https://mir-s3-cdn-cf.behance.net/projects/404/95974e121862329.Y3JvcCw5MjIsNzIxLDAsMTM5.png"
                  className="w-100"
                />
              </div>
            )}
            {cartItems.map((item) => (
              <div key={item.id} className="added-item-row">
                <div className="">{item.name}</div>
                <div
                  className=""
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <button onClick={() => onRemove(item)} className="remove">
                    -
                  </button>{" "}
                  <div style={{ paddingLeft: 20, paddingRight: 20 }}>
                    {item.qty} x ${item.price.toFixed(2)}
                  </div>
                  <button onClick={() => onAdd(item)} className="add">
                    +
                  </button>
                </div>
              </div>
            ))}

            
  );
}
export default Cart;
