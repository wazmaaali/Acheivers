import React from "react";
import "../assets/css/fontawesome.min.css";
import "../assets/css/default.css";
import "../assets/css/style.css";
import "../assets/css/responsive.css";
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
  console.log("9999 cat_id: ", cat);

  const [counter, setCount] = useState(0);

  let incrementCount = (e) => {
    setCount(counter + 1);
    //jquery for showing popup
    const modal = document.querySelector(".modal");
    const closeBtn = document.querySelector(".close");
    modal.style.display = "block";
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });

    const mapping = { b1: 0, b2: 1, b3: 2, b4: 3, b5: 4, b6: 5 };
    const a = e.target.id;
    const index = mapping[a];
    console.log("INDEX == ", index);
    var item = addTOCart.find((x) => x.sc_id == datalist[index].sc_id);
    if (item) {
      item.count = item.count + 1;
    } else {
      var item = JSON.parse(JSON.stringify(datalist[index])); //just to make sure its not passing reference
      item.count = 1;
      addTOCart.push(item);
    }
  };

  let decrementCount = (e) => {
    if (counter <= 0) {
      setCount(0);
    } else {
      setCount(counter - 1);
    }
    const mapping = { b11: 0, b12: 1, b13: 2, b14: 3, b15: 4, b16: 5 };
    const a = e.target.id;
    const index = mapping[a];
    console.log("INDEX == ", index);
    var item = addTOCart.find((x) => x.sc_id == datalist[index].sc_id);
    if (item) {
      if (item.count == 0) {
        item.count = 0;
      } else {
        item.count = item.count - 1;
      }
    } else {
      var item = JSON.parse(JSON.stringify(datalist[index])); //just to make sure its not passing reference
      item.count = 1;
      addTOCart.pop(item);
    }
    console.log("INDEX == ", addTOCart);
  };

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
        document.getElementById("h6").innerHTML = res.data[5].sc_name;

        document.getElementById("p1").innerHTML = res.data[0].sc_price;
        document.getElementById("p2").innerHTML = res.data[1].sc_price;
        document.getElementById("p3").innerHTML = res.data[2].sc_price;
        document.getElementById("p4").innerHTML = res.data[3].sc_price;
        document.getElementById("p5").innerHTML = res.data[4].sc_price;
        document.getElementById("p6").innerHTML = res.data[5].sc_price;

        document.getElementById("img1").src = res.data[0].sc_image;
        document.getElementById("img2").src = res.data[1].sc_image;
        document.getElementById("img3").src = res.data[2].sc_image;
        document.getElementById("img4").src = res.data[3].sc_image;
        document.getElementById("img5").src = res.data[4].sc_image;
        document.getElementById("img6").src = res.data[5].sc_image;

        setTitle(location.state.id);
      } catch (err) {
        console.log("Error: ", err);
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

        <form action={filterData} className="searchForm">
          <input
            type="search"
            name="search"
            id="search"
            className="searchBox"
            placeholder="Search by Name..."
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
          <Link to="/Cart" onClick={sendData}>
            <a className="iconLink" title="Shopping Cart">
              <i className="fa fas fa-shopping-cart icon"></i>
            </a>
          </Link>
        </div>
      </section>

      <section id="product" className="product">
        <h2 id="maintitle" className="sectionTitle"></h2>
        <div className="container">
          <div className="box">
            <figure className="figure">
              <img id="img1" alt="banner" className="img" />
            </figure>
            <h2 id="h1" className="title"></h2>

            <div className="price">
              <span id="p1" className="present"></span>
              <span className="previous">$15.3</span>
            </div>
            <div class="modal">
              <div class="modal_content">
                <span class="close">&times;</span>
                <p>Item Added!!!</p>
              </div>
            </div>

            <div style={{ display: "flex", fontSize: "40px" }}>
              <button id="b11" onClick={decrementCount} className="btn">
                -
              </button>
              <div className="price">
                <span className="present">{counter}</span>
              </div>
              <button id="b1" onClick={incrementCount} className="btn">
                +
              </button>
            </div>

            {/* <button id="b1" type="button" className="btn" onClick={handleClick}>
              Add to Cart
            </button> */}
          </div>

          <div className="box">
            <figure className="figure">
              <img id="img2" alt="banner" className="img" />
            </figure>
            <h2 id="h2" className="title"></h2>
            <div className="price">
              <span id="p2" className="present"></span>
              <span className="previous">$15.3</span>
            </div>
            <div style={{ display: "flex", fontSize: "40px" }}>
              <button id="b12" onClick={decrementCount} className="btn">
                -
              </button>
              <div className="price">
                <span className="present">{counter}</span>
              </div>
              <button id="b2" onClick={incrementCount} className="btn">
                +
              </button>
            </div>
            {/* <button id="b2" type="button" className="btn" onClick={handleClick}>
              Add To Cart
            </button> */}
          </div>

          <div className="box">
            <figure className="figure">
              <img id="img3" alt="banner" className="img" />
            </figure>
            <h2 id="h3" className="title"></h2>
            <div className="price">
              <span id="p3" className="present"></span>
              <span className="previous">$15.3</span>
            </div>
            <div style={{ display: "flex", fontSize: "40px" }}>
              <button id="b13" onClick={decrementCount} className="btn">
                -
              </button>
              <div className="price">
                <span className="present">{counter}</span>
              </div>
              <button id="b3" onClick={incrementCount} className="btn">
                +
              </button>
            </div>
            {/* <button id="b3" type="button" className="btn" onClick={handleClick}>
              Add To Cart
            </button> */}
          </div>

          <div className="box">
            <figure className="figure">
              <img id="img4" alt="banner" className="img" />
            </figure>
            <h2 id="h4" className="title"></h2>
            <div className="price">
              <span id="p4" className="present"></span>
              <span className="previous">$15.3</span>
            </div>
            <div style={{ display: "flex", fontSize: "40px" }}>
              <button id="b14" onClick={decrementCount} className="btn">
                -
              </button>
              <div className="price">
                <span className="present">{counter}</span>
              </div>
              <button id="b4" onClick={incrementCount} className="btn">
                +
              </button>
            </div>
            {/* <button id="b4" type="button" className="btn" onClick={handleClick}>
              Add To Cart
            </button> */}
          </div>

          <div className="box">
            <figure className="figure">
              <img id="img5" alt="banner" className="img" />
            </figure>
            <h2 id="h5" className="title"></h2>
            <div className="price">
              <span id="p5" className="present"></span>
              <span className="previous">$15.3</span>
            </div>
            <div style={{ display: "flex", fontSize: "40px" }}>
              <button id="b15" onClick={decrementCount} className="btn">
                -
              </button>
              <div className="price">
                <span className="present">{counter}</span>
              </div>
              <button id="b5" onClick={incrementCount} className="btn">
                +
              </button>
            </div>
            {/* <button id="b5" type="button" className="btn" onClick={handleClick}>
              Add To Cart
            </button> */}
          </div>

          <div className="box">
            <figure className="figure">
              <img id="img6" alt="banner" className="img" />
            </figure>
            <h2 id="h6" className="title"></h2>
            <div className="price">
              <span id="p6" className="present"></span>
              <span className="previous">$15.3</span>
            </div>
            <div style={{ display: "flex", fontSize: "40px" }}>
              <button
                id="b16"
                onClick={decrementCount}
                className="btn"
                style={{ fontSize: "15px" }}
              >
                -
              </button>
              <div className="price">
                <span className="present">{counter}</span>
              </div>
              <button id="b6" onClick={incrementCount} className="btn">
                +
              </button>
            </div>
            {/* <button id="b6" type="button" className="btn" onClick={handleClick}> */}
            {/* Add To Cart */}
            {/* </button> */}
          </div>
        </div>
      </section>
    </div>
  );
};

//Add items to cart
const handleClick = (e) => {
  //jquery for showing popup
  const modal = document.querySelector(".modal");
  const closeBtn = document.querySelector(".close");
  modal.style.display = "block";
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  const mapping = { b1: 0, b2: 1, b3: 2, b4: 3, b5: 4, b6: 5 };
  const a = e.target.id;
  const index = mapping[a];
  console.log("INDEX == ", index);
  var item = addTOCart.find((x) => x.sc_id == datalist[index].sc_id);
  if (item) {
    item.count = item.count + 1;
  } else {
    var item = JSON.parse(JSON.stringify(datalist[index])); //just to make sure its not passing reference
    item.count = 1;
    addTOCart.push(item);
  }
};
//Fetch data added in cart and send it to backend
let sendData = () => {
  sessionStorage.setItem("items", JSON.stringify(addTOCart));
};

//Set Main title of Main Category page on the basis of c_id coming from category page
let setTitle = (id) => {
  if (id == 1) {
    document.getElementById("maintitle").innerHTML = "VEGETABLES";
  }
  if (id == 2) {
    document.getElementById("maintitle").innerHTML = "FRUITS";
  }
  if (id == 3) {
    document.getElementById("maintitle").innerHTML = "MEAT";
  }
  if (id == 4) {
    document.getElementById("maintitle").innerHTML = "DAIRY";
  }
  if (id == 5) {
    document.getElementById("maintitle").innerHTML = "SWEETS";
  }
  if (id == 6) {
    document.getElementById("maintitle").innerHTML = "FROZEFOOD";
  }
};

let filterData = () => {
  const filteredSuggestions = datalist.filter((datalist) =>
    datalist.sc_name.toString().toLowerCase()
  );
  return filteredSuggestions;
};

export default MainCategory;