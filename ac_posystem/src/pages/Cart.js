import React from "react"
import "../assets/css/fontawesome.min.css" 
import "../assets/css/default.css" 
import "../assets/css/style.css" 
import "../assets/css/responsive.css" 
import { Link } from "react-router-dom";

function Cart () {
    return (
        <div className="CartContainer">
   	   <div className="Header">
   	   	<h3 className="Heading">Shopping Cart</h3>
   	   	<h5 className="Action">Remove all</h5>
   	   </div>

   	   <div className="Cart-Items">
   	   	  <div className="image-box">
   	   	  	<img src="asserts/images/lf.png" alt="Cart"
            style={{ height:"120px" }} />
   	   	  </div>
   	   	  <div className="about">
   	   	  	<h1 className="title">Apple Juice</h1>
   	   	  	<h3 className="subtitle">350ml</h3>
   	   	  	<img src="images/veg.png"  alt="Cart"
            style={{ height:"30px" }} />
   	   	  </div>
   	   	  <div className="counter">
   	   	  	<div className="btn">+</div>
   	   	  	<div className="count">2</div>
   	   	  	<div className="btn">-</div>
   	   	  </div>
   	   	  <div className="prices">
   	   	  	<div className="amount">$2.99</div>
   	   	  	<div className="save"><u>Save for later</u></div>
   	   	  	<div className="remove"><u>Remove</u></div>
   	   	  </div>
   	   </div>

   	   <div className="Cart-Items pad">
   	   	  <div className="image-box">
   	   	  	<img src="images/grapes.png"  alt="Cart"
            style={{ height:"120px" }} />
   	   	  </div>
   	   	  <div className="about">
   	   	  	<h1 className="title">Grapes Juice</h1>
   	   	  	<h3 className="subtitle">250ml</h3>
   	   	  	<img src="images/veg.png"   alt="Cart"
            style={{ height:"30px" }} />
   	   	  </div>
   	   	  <div className="counter">
   	   	  	<div className="btn">+</div>
   	   	  	<div className="count">1</div>
   	   	  	<div className="btn">-</div>
   	   	  </div>
   	   	  <div className="prices">
   	   	  	<div className="amount">$3.19</div>
   	   	  	<div className="save"><u>Save for later</u></div>
   	   	  	<div className="remove"><u>Remove</u></div>
   	   	  </div>
   	   </div>
   	 
   	 <div className="checkout">
   	 <div className="total">
   	 	<div>
   	 		<div className="Subtotal">Sub-Total</div>
   	 		<div className="items">2 items</div>
   	 	</div>
   	 	<div className="total-amount">$6.18</div>
   	 </div>
		<Link to="/Payment" className="btn">
                   Checkout
                </Link>

   	 </div>
	 
   </div>

    );
}
export default Cart;
