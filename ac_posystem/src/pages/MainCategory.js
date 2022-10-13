import React from "react"
import "../assets/css/fontawesome.min.css" 
import "../assets/css/default.css" 
import "../assets/css/style.css" 
import "../assets/css/responsive.css" 
import image1 from "../assets/images/product-1.png"
import image2 from "../assets/images/product-2.png"
import image3 from "../assets/images/product-3.png"
import image4 from "../assets/images/product-4.png"
import image5 from "../assets/images/product-5.png"
import image6 from "../assets/images/product-6.png"
import image7 from "../assets/images/product-7.png"
import image8 from "../assets/images/product-8.png"
import image9 from "../assets/images/product-9.png"

function MainCategory() {
    return(
<div>

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

      <section id="product" class="product">
          <h2 class="sectionTitle"> Vegetables</h2>
          <div class="container">
            <div class="box">
              <h3 class="discount">-17.5%</h3>
              <figure class="figure">
              <img src={image4} alt="banner" class="img" />

              </figure>
              <h2 class="title">Natural Milk</h2>
              
              <div class="price">
                <span class="present">$10.5</span
                ><span class="previous">$15.3</span>
              </div>
    
              <button type="button" class="btn">Add To Cart</button>
  
            </div>
           
            <div class="box">
              <h3 class="discount">-17.5%</h3>
              <figure class="figure">
                 <img src={image1} alt="banner" class="img" />
              </figure>
              <h2 class="title">Grapes</h2>
              <div class="price">
                <span class="present">$10.5</span
                ><span class="previous">$15.3</span>
              </div>
    
              <button type="button" class="btn">Add To Cart</button>
            </div>
           
            <div class="box">
              <h3 class="discount">-18.5%</h3>
              <figure class="figure">
              <img src={image2} alt="banner" class="img" />

              </figure>
              <h2 class="title">Organic Nut</h2>
              <div class="price">
                <span class="present">$10.5</span
                ><span class="previous">$15.3</span>
              </div>
    
              <button type="button" class="btn">Add To Cart</button>
            </div>
          
            <div class="box">
              <h3 class="discount">-13.5%</h3>
              <figure class="figure">
              <img src={image3} alt="banner" class="img" />

              </figure>
              <h2 class="title">Apple</h2>
              <div class="price">
                <span class="present">$10.5</span
                ><span class="previous">$15.3</span>
              </div>
    
              <button type="button" class="btn">Add To Cart</button>
            </div>
            
            <div class="box">
              <h3 class="discount">-10.5%</h3>
              <figure class="figure">
              <img src={image4} alt="banner" class="img" />

              </figure>
              <h2 class="title">Tomato</h2>
              <div class="price">
                <span class="present">$10.5</span
                ><span class="previous">$15.3</span>
              </div>
    
              <button type="button" class="btn">Add To Cart</button>
            </div>
           
            <div class="box">
              <h3 class="discount">-30.5%</h3>
              <figure class="figure">
              <img src={image5} alt="banner" class="img" />

              </figure>
              <h2 class="title">Carrot</h2>
              <div class="price">
                <span class="present">$10.5</span
                ><span class="previous">$15.3</span>
              </div>
    
              <button type="button" class="btn">Add To Cart</button>
            </div>
           
          </div>
          
        </section>
        </div>
    )

}

export default MainCategory;
