import "../assets/css/fontawesome.min.css" 
import "../assets/css/default.css" 
import "../assets/css/style.css" 
import "../assets/css/responsive.css" 
import image1 from "../assets/images/category-1.png"
import image2 from "../assets/images/category-2.png"
import image3 from "../assets/images/category-3.png"
import image4 from "../assets/images/category-4.png"
import image5 from "../assets/images/sauces.png"
import image6 from "../assets/images/sweets.png"
import image7 from "../assets/images/frozenfood.png"

import {Link} from 'react-router-dom'

// var htmlContent = require('/Users/saira/Acheivers/ac_posystem/src/index.html');

function Home() {
  return (
    // <div dangerouslySetInnerHTML={ {__html: htmlContent} } />
     <div className="App">
     <section class="header">
      <a  class="logo">
        <i class="fas fa-shopping-bag icon"></i>
        <h1 class="logoTitle">Achievers Grocery</h1>
      </a>

      <form action="" class="searchForm">
        <input
          type="search"
          name="search"
          id="search"
          class="searchBox"
          placeholder="Search here..."
        />
        <label for="search" class="searchPointer"
          ><i class="fas fa-search icon"></i
        ></label>
      </form>
      <div class="mobileMenuHandler">
        <i class="fas fa-bars icon"></i>
      </div>
    </section>

    <section class="navbar" id="navbar">
      
      <div class="iconContainer">
        <a  class="iconLink" title="Shopping Cart">
          <i class="fa fas fa-shopping-cart icon"></i>
        </a>
       
      </div>
    </section>

    <section id="category" class="category">
      <h2 class="sectionTitle">Shop By <span>Category</span></h2>
      <div class="container">
        <div class="box">
          <div class="content">
            <h3 class="title">Vegetables</h3>
            <h4 class="subTitle">Upto 27.5% off</h4>
          </div>
          <figure class="figure">
            <img src={image1} alt="banner" class="img" />
          </figure>
          <Link to="/MainCategory" class="btn">Shop Now</Link>
        </div>
        <div class="box">
          <div class="content">
            <h3 class="title">Juice</h3>
            <h4 class="subTitle">Upto 50% off</h4>
          </div>
          <figure class="figure">
            <img src={image2} alt="banner" class="img" />
          </figure>
          <Link to="/MainCategory" class="btn">Shop Now</Link>
        </div>
        <div class="box">
          <div class="content">
            <h3 class="title">Meat</h3>
            <h4 class="subTitle">Upto 35% off</h4>
          </div>
          <figure class="figure">
            <img src={image3} alt="banner" class="img" />
          </figure>
          <Link to="/MainCategory" class="btn">Shop Now</Link>
        </div>
        <div class="box">
          <div class="content">
            <h3 class="title">Fruits</h3>
            <h4 class="subTitle">Upto 40% off</h4>
          </div>
          <figure class="figure">
            <img src={image4} alt="banner" class="img" />
          </figure>
          <Link to="/MainCategory" class="btn">Shop Now</Link>
        </div>
      </div>
      <div class="container">
        <div class="box">
          <div class="content">
            <h3 class="title">Sweets</h3>
            <h4 class="subTitle">Upto 27.5% off</h4>
          </div>
          <figure class="figure">
            <img src={image4} alt="banner" class="img" />
          </figure>
          <Link to="/MainCategory" class="btn">Shop Now</Link>
        </div>
        <div class="box">
          <div class="content">
            <h3 class="title">Sauces</h3>
            <h4 class="subTitle">Upto 50% off</h4>
          </div>
          <figure class="figure">
            <img src={image5} alt="banner" class="img" />
          </figure>
          <Link to="/MainCategory" class="btn">Shop Now</Link>
        </div>
        <div class="box">
          <div class="content">
            <h3 class="title">Container Food</h3>
            <h4 class="subTitle">Upto 35% off</h4>
          </div>
          <figure class="figure">
            <img src={image6} alt="banner" class="img" />
          </figure>
          <Link to="/MainCategory" class="btn">Shop Now</Link>
        </div>
        <div class="box">
          <div class="content">
            <h3 class="title">Grain Product</h3>
            <h4 class="subTitle">Upto 40% off</h4>
          </div>
          <figure class="figure">
            <img src={image7} alt="banner" class="img" />
          </figure>
          <Link to="/MainCategory" class="btn">Shop Now</Link>
        </div>
      </div>
    </section>
     </div>
  );
}

export default Home;
