import React, { useState } from "react";
import "../assets/css/fontawesome.min.css";
import "../assets/css/default.css";
import "../assets/css/style.css";
import "../assets/css/responsive.css";
import { Link } from "react-router-dom";
import data from "./data";

function Cart() {

  var storageArr = [];
  var products;
  //console.log("JSON.parse(localStorage.getItem(",JSON.parse(localStorage.getItem("cartList1")))
  //const itemss = JSON.parse(sessionStorage.getItem("items"));
  //console.log("itemss",itemss)
  //const products = JSON.parse(localStorage.getItem("cartList1"));
  localStorage.getItem("cartList1") == null ? products = [] : products = JSON.parse(localStorage.getItem("cartList1"))

  const [cartItems, setCartItems] = useState(products);
  const itemsPrice = cartItems.reduce((a, c) => a + c.c_id * c.sc_price, 0);
  const shippingPrice = 10;
  const totalPrice = itemsPrice + shippingPrice;

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.sc_id === product.sc_id);
    if (exist) {
      var check = cartItems.map((x)=>x.sc_id === product.sc_id)
      if(check) {
        var index = products.findIndex((x) => x.sc_id === product.sc_id)
        products[index].c_id = products[index].c_id + 1
        localStorage.setItem("cartList1",JSON.stringify(products))
      }
      setCartItems(cartItems.map((x) => x.sc_id === product.sc_id ? { ...exist, c_id: exist.c_id + 1 } : x));
    } else {
      setCartItems([...cartItems, { ...product, c_id: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.sc_id === product.sc_id);
    if (exist.c_id === 1) {
      var check = cartItems.map((x)=>x.sc_id === product.sc_id)
      if(check) {
        var index = products.findIndex((x) => x.sc_id === product.sc_id)
        console.log("index",index,products)
        products.splice(index,1)
        console.log("products12",products)
        localStorage.setItem("cartList1",JSON.stringify(products))
      }
      setCartItems(cartItems.filter((x) => x.sc_id !== product.sc_id));
    } else {
      var check = cartItems.map((x)=>x.sc_id === product.sc_id)
      if(check) {
        var index = products.findIndex((x) => x.sc_id === product.sc_id)
        products[index].c_id = products[index].c_id - 1
        localStorage.setItem("cartList1",JSON.stringify(products))
      }
      setCartItems(
        cartItems.map((x) =>
          x.sc_id === product.sc_id ? { ...exist, c_id: exist.c_id - 1 } : x
        )
      );
    }
  };

  return (
    <div className="cart-parent">
      <div style={{ display: "flex", justifyContent: "center", textAlign: "center" }}>
       
        {/* <h1>All Products</h1>
        <h1></h1> */}
      </div>
      <div className="cart-container">
        {/* <div className="left">
          <div className="product-items-container">
            {products.map((product) => (
              <div className="product-item">
                <img src={product.sc_image} alt={product.sc_name} />
                <h3>{product.sc_name}</h3>
                <div>${product.sc_price}</div>
                <div>
                  <button onClick={() => onAdd(product)}>Add To Cart</button>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        <div className="center">
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
              <div key={item.sc_id} className="added-item-row">
                <div className="">{item.sc_name}</div>
                <div
                  className=""
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <button onClick={() => onRemove(item)} className="remove">
                    -
                  </button>{" "}
                  <div style={{ paddingLeft: 20, paddingRight: 20 }}>
                    {item.c_id} x ${item.sc_price}
                  </div>
                  <button onClick={() => onAdd(item)} className="add">
                    +
                  </button>
                </div>
              </div>
            ))}

            {cartItems.length !== 0 && (
              <>
                <hr></hr>

                <div className="d-flex-space-between">
                  <div>Items Price</div>
                  <div>${itemsPrice.toFixed(2)}</div>
                </div>

                <div className="d-flex-space-between">
                  <div>Shipping Price</div>
                  <div>${shippingPrice.toFixed(2)}</div>
                </div>

                <div className="d-flex-space-between">
                  <div>
                    <b>Total Price</b>
                  </div>
                  <div>
                    <b>${totalPrice.toFixed(2)}</b>
                  </div>
                </div>

                <hr />
                <div className="  ">
                  <button className="btn-checkout">Checkout</button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Cart;