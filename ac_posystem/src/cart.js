import React, { useState } from 'react';
import './App.css';

function App() {
  const [Products] = useState([
    {
      name: 'Banana',
      price: '$2.99',
      image: 'https://tse1.mm.bing.net/th?id=OIP.GbmHvz3QvA1Oz2896pbIvQHaFW&pid=Api&P=0',
    },
    {
      name: 'Apple',
      price: '$2.60',
      image: 'https://tse2.mm.bing.net/th?id=OIP.R0ResAz3EnSCx9MQzA_-EgHaHI&pid=Api&P=0',
    },
    {
      name: 'Onion',
      price: '$1.30',
      image: 'https://tse1.mm.bing.net/th?id=OIP.7IUkXAgs4EMXT65vs2dM1QHaFy&pid=Api&P=0',
    },
    {
      name: 'potato',
      price: '$1.20',
      image: 'https://tse2.mm.bing.net/th?id=OIP.F0aQXnmCDGEadfNivihUAQHaF8&pid=Api&P=0',
    },
  ]);

  return (
  <div className="App">
    <h1>Products</h1>
    <div className="products">
    {Products.map((product, idx) => (
    <div className="product" key={idx}>
    <h3>{product.name}</h3>
    <h4>{product.cost}</h4>
    <img src={product.image} alt={product.name}/>
    <button>Add to Cart</button>
    </div>
    ))}
    </div>
    </div>
  );
}

export default App;
