import "../assets/css/fontawesome.min.css";
import "../assets/css/default.css";
import "../assets/css/style.css";
import "../assets/css/responsive.css";
import image1 from "../assets/images/category-1.png";
import image2 from "../assets/images/category-2.png";
import image3 from "../assets/images/category-3.png";
import image4 from "../assets/images/category-4.png";
import image5 from "../assets/images/sauces.png";
import image6 from "../assets/images/sweets.png";
import image7 from "../assets/images/frozenfood.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import React from "react";

const Home = () => {
  const [home, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get("http://localhost:8803/categories");
        setCategories(res.data);
        document.getElementById("h1").innerHTML = res.data[0].c_name;
        document.getElementById("h2").innerHTML = res.data[1].c_name;
        document.getElementById("h3").innerHTML = res.data[2].c_name;
        document.getElementById("h4").innerHTML = res.data[3].c_name;
        document.getElementById("h5").innerHTML = res.data[4].c_name;
        document.getElementById("h6").innerHTML = res.data[5].c_name;
      } catch (err) {
        console.log("99999 Error: ", err);
      }
    };
    fetchCategories();
  }, []);

  const newLocal = "iconLink";
  return (
    // <div dangerouslySetInnerHTML={ {__html: htmlContent} } />
    <div className="App">
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

          <a className={newLocal} title="Shopping Cart">
            <Link to="/Cart">
            <i className="fa fas fa-shopping-cart icon"></i>
            </Link>            
          </a>
        </div>
      </section>

      <div className="Categories">
        {/* {home.map((home) => ( */}
        <div className="Category">
          <section id="category" className="category">
            <h2 className="sectionTitle">
              Shop By <span>Category</span>
            </h2>
            <div className="container">
              <div className="box">
                <div className="content">
                  <h3 id="h1" className="title"></h3>
                  <h4 className="subTitle">Upto 27.5% off</h4>
                </div>
                <figure className="figure">
                  <img src={image1} alt="banner" className="img" />
                </figure>

                <Link
                  to="/MainCategory"
                  state={{
                    id: "1",
                  }}
                  className="btn"
                >
                  Show Now
                </Link>
              </div>
              <div className="box">
                <div className="content">
                  <h3 id="h2" className="title"></h3>
                  <h4 className="subTitle">Upto 50% off</h4>
                </div>
                <figure className="figure">
                  <img src={image4} alt="banner" className="img" />
                </figure>
                <Link
                  to="/MainCategory"
                  state={{
                    id: "2", // your data array of objects
                  }}
                  className="btn"
                >
                  Shop Now
                </Link>
              </div>
              <div className="box">
                <div className="content">
                  <h3 id="h3" className="title"></h3>
                  <h4 className="subTitle">Upto 35% off</h4>
                </div>
                <figure className="figure">
                  <img src={image3} alt="banner" className="img" />
                </figure>
                <Link
                  to="/MainCategory"
                  state={{
                    id: "3", // your data array of objects
                  }}
                  className="btn"
                >
                  Shop Now
                </Link>
              </div>
            </div>
            <div className="container">
              <div className="box">
                <div className="content">
                  <h3 id="h4" className="title"></h3>
                  <h4 className="subTitle">Upto 27.5% off</h4>
                </div>
                <figure className="figure">
                  <img src={image2} alt="banner" className="img" />
                </figure>

                <Link
                  to="/MainCategory"
                  state={{
                    id: "4", // your data array of objects
                  }}
                  className="btn"
                >
                  Show Now
                </Link>
              </div>
              <div className="box">
                <div className="content">
                  <h3 id="h5" className="title"></h3>
                  <h4 className="subTitle">Upto 50% off</h4>
                </div>
                <figure className="figure">
                  <img src={image5} alt="banner" className="img" />
                </figure>
                <Link
                  to="/MainCategory"
                  state={{
                    id: "5", // your data array of objects
                  }}
                  className="btn"
                >
                  Shop Now
                </Link>
              </div>
              <div className="box">
                <div className="content">
                  <h3 id="h6" className="title"></h3>
                  <h4 className="subTitle">Upto 35% off</h4>
                </div>
                <figure className="figure">
                  <img src={image7} alt="banner" className="img" />
                </figure>
                <Link
                  to="/MainCategory"
                  state={{
                    id: "6", // your data array of objects
                  }}
                  className="btn"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div class="modal fade" id="shoppingcart" role="dialog" aria-labelledby="shoppingcartLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="shoppingcartLabel">Modal title</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
            ...
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
      


    </div>
  );
};

export default Home;