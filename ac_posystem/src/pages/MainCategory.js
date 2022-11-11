import React from "react";
import "../assets/css/fontawesome.min.css";
import "../assets/css/default.css";
import "../assets/css/style.css";
import "../assets/css/responsive.css";
import image1 from "../assets/images/product-1.png";
import image2 from "../assets/images/product-2.png";
import image3 from "../assets/images/product-3.png";
import image4 from "../assets/images/product-4.png";
import image5 from "../assets/images/product-5.png";
import image6 from "../assets/images/product-6.png";
import image7 from "../assets/images/product-7.png";
import image8 from "../assets/images/product-8.png";
import image9 from "../assets/images/product-9.png";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

var cat = "";
var datalist = [];
var addTOCart = [];
const MainCategory = () => {
  const location = useLocation();
  cat = location.state.id;
  console.log("9999 cat: ", cat);
  useEffect(() => {
    const fetchSubCategories = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8803/sub_categories/" + location.state.id
        );
        datalist = res.data;
        document.getElementById("h1").innerHTML = res.data[0].sc_name;
        document.getElementById("h2").innerHTML = res.data[1].sc_name;
        document.getElementById("h3").innerHTML = res.data[2].sc_name;
        document.getElementById("h4").innerHTML = res.data[3].sc_name;
        document.getElementById("h5").innerHTML = res.data[4].sc_name;
        // document.getElementById("h6").innerHTML = res.data[5].sc_name;

        document.getElementById("p1").innerHTML = res.data[0].sc_price;
        document.getElementById("p2").innerHTML = res.data[1].sc_price;
        document.getElementById("p3").innerHTML = res.data[2].sc_price;
        document.getElementById("p4").innerHTML = res.data[3].sc_price;
        document.getElementById("p5").innerHTML = res.data[4].sc_price;
        // document.getElementById("p6").innerHTML = res.data[5].sc_price;

        console.log("99999 data: ", res.data[0].sc_price);
      } catch (err) {
        console.log("99999 Error: ", err);
      }
    };
    fetchSubCategories();
  }, []);

  return (
    <div>
      <section className="header">
        <a className="logo">
          <i className="fas fa-shopping-bag icon"></i>
          <h1 className="logoTitle">Achievers Grocery</h1>
        </a>

        <form action="" className="searchForm">
          <input
            type="search"
            name="search"
            id="search"
            className="searchBox"
            placeholder="Search here..."
          />
          <label htmlFor="search" className="searchPointer">
            <i className="fas fa-search icon"></i>
          </label>
        </form>
        <div className="mobileMenuHandler">
          <i className="fas fa-bars icon"></i>
        </div>
      </section>

      <section className="navbar" id="navbar">
        <div className="iconContainer">
          <Link
            to="/Cart"
            state={{
              value: addTOCart,
            }}
          >
            <a className="iconLink" title="Shopping Cart">
              <i className="fa fas fa-shopping-cart icon"></i>
            </a>
          </Link>
        </div>
      </section>

      <section id="product" className="product">
        <h2 className="sectionTitle"> Vegetables</h2>
        <div className="container">
          <div className="box">
            <h3 className="discount">-17.5%</h3>
            <figure className="figure">
              <img src={image4} alt="banner" className="img" />
            </figure>
            <h2 id="h1" className="title"></h2>

            <div className="price">
              <span id="p1" className="present"></span>
              <span className="previous">$15.3</span>
            </div>

            <button id="b1" type="button" className="btn" onClick={handleClick}>
              Add to Cart
            </button>
          </div>

          <div className="box">
            <h3 className="discount">-17.5%</h3>
            <figure className="figure">
              <img src={image1} alt="banner" className="img" />
            </figure>
            <h2 id="h2" className="title"></h2>
            <div className="price">
              <span id="p2" className="present"></span>
              <span className="previous">$15.3</span>
            </div>

            <button id="b2" type="button" className="btn" onClick={handleClick}>
              Add To Cart
            </button>
          </div>

          <div className="box">
            <h3 className="discount">-18.5%</h3>
            <figure className="figure">
              <img src={image2} alt="banner" className="img" />
            </figure>
            <h2 id="h3" className="title"></h2>
            <div className="price">
              <span id="p3" className="present"></span>
              <span className="previous">$15.3</span>
            </div>

            <button id="b3" type="button" className="btn" onClick={handleClick}>
              Add To Cart
            </button>
          </div>

          <div className="box">
            <h3 className="discount">-13.5%</h3>
            <figure className="figure">
              <img src={image3} alt="banner" className="img" />
            </figure>
            <h2 className="title">Apple</h2>
            <div className="price">
              <span id="p4" className="present"></span>
              <span className="previous">$15.3</span>
            </div>

            <button id="b4" type="button" className="btn" onClick={handleClick}>
              Add To Cart
            </button>
          </div>

          <div className="box">
            <h3 className="discount">-10.5%</h3>
            <figure className="figure">
              <img src={image4} alt="banner" className="img" />
            </figure>
            <h2 id="h4" className="title"></h2>
            <div className="price">
              <span id="p5" className="present"></span>
              <span className="previous">$15.3</span>
            </div>

            <button id="b5" type="button" className="btn" onClick={handleClick}>
              Add To Cart
            </button>
          </div>

          <div className="box">
            <h3 className="discount">-30.5%</h3>
            <figure className="figure">
              <img src={image5} alt="banner" className="img" />
            </figure>
            <h2 id="h5" className="title"></h2>
            <div className="price">
              <span id="p6" className="present"></span>
              <span className="previous">$15.3</span>
            </div>

            <button id="b6" type="button" className="btn" onClick={handleClick}>
              Add To Cart
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

const handleClick = (e) => {
  console.log(e.target.id, "999 : ", datalist[1]);
  const a = e.target.id;
  if (a == "b1") {
    addTOCart.push(datalist[0]);
  }
  if (a == "b2") {
    addTOCart.push(datalist[1]);
  }
  if (a == "b3") {
    addTOCart.push(datalist[2]);
  }
  if (a == "b4") {
    addTOCart.push(datalist[3]);
  }
  if (a == "b5") {
    addTOCart.push(datalist[4]);
  }
  if (a == "b6") {
    addTOCart.push(datalist[5]);
  }
};

export default MainCategory;
