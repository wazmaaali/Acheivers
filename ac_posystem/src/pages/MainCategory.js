import React from "react";
import "../assets/css/fontawesome.min.css";
import "../assets/css/default.css";
import "../assets/css/style.css";
import "../assets/css/responsive.css";
import image1 from "../assets/images/milk.png";
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

const MainCategory = () => {
  // const [sb_c, setSubCategories] = useState([]);

  useEffect(() => {
    const fetchSubCategories = async () => {
      try {
        const res = await axios.get("http://localhost:8803/sub_categories");
        // setSubCategories(res.data);
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
          <label for="search" className="searchPointer">
            <i className="fas fa-search icon"></i>
          </label>
        </form>
        <div className="mobileMenuHandler">
          <i className="fas fa-bars icon"></i>
        </div>
      </section>

      <section className="navbar" id="navbar">
        <div className="iconContainer">
          <a className="iconLink" title="Shopping Cart">
            <i className="fa fas fa-shopping-cart icon"></i>
          </a>
        </div>
      </section>

      <section id="product" className="product">
        <h2 className="sectionTitle">Fruits</h2>
        <div className="container">
          <div className="box">
            <h3 className="discount">-17.5%</h3>
            <figure className="figure">
              <img src={image4} alt="banner" className="img" />
            </figure>
            <h2 id="h1" className="title">Apples</h2>

            <div className="price">
              <span id="p1" className="present"></span>
              <span className="previous">$15.3</span>
            </div>


            <button type="button" className="btn">
              Add To Cart
            </button>
          </div>

          <div className="box">
            <h3 className="discount">-17.5%</h3>
            <figure className="figure">
              <img src={image1} alt="banner" className="img" />
            </figure>
            <h2 id="h2" className="title">Bananas</h2>
            <div className="price">
              <span id="p2" className="present"></span>
              <span className="previous">$15.3</span>
            </div>

     

            
          </div>

          <div className="box">
            <h3 className="discount">-18.5%</h3>
            <figure className="figure">
              <img src={image2} alt="banner" className="img" />
            </figure>
            <h2 id="h3" className="title">cherry</h2>
            <div className="price">
              <span id="p3" className="present"></span>
              <span className="previous">$15.3</span>
            </div>

            <button type="button" className="btn">
              Add To Cart
            </button>
          </div>

          <div className="box">
            <h3 className="discount">-13.5%</h3>
            <figure className="figure">
              <img src={image3} alt="banner" className="img" />
            </figure>
            <h2 className="title">Oranges</h2>
            <div className="price">
              <span id="p4" className="present"></span>
              <span className="previous">$15.3</span>
            </div>

            <button type="button" className="btn">
              Add To Cart
            </button>
          </div>

          <div className="box">
            <h3 className="discount">-10.5%</h3>
            <figure className="figure">
              <img src={image4} alt="banner" className="img" />
            </figure>
            <h2 id="h4" className="title">water melon</h2>
            <div className="price">
              <span id="p5" className="present"></span>
              <span className="previous">$15.3</span>
            </div>

            <button type="button" className="btn">
              Add To Cart
            </button>
          </div>

          <div className="box">
            <h3 className="discount">-30.5%</h3>
            <figure className="figure">
              <img src={image5} alt="banner" className="img" />
            </figure>
            <h2 id="h5" className="title">Grapes</h2>
            <div className="price">
              <span id="p6" className="present"></span>
              <span className="previous">$15.3</span>
            </div>

            <button type="button" className="btn">
              Add To Cart
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainCategory;
