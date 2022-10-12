import React from "react"
import data from "./Components/back/Data/Data";
import Header from "./Components/front/Header/Header";
import { BrowserRouter as router } from "react-router-dom";

const App = () => {
  const { productItems } = data;
  return (
    <div> 
      <router>
      <Header />
      </router>
    </div>
  );
};

export default App;
