import React from "react"
<<<<<<< HEAD
import data from "./Components/back/Data/Data";
import Header from "./Components/front/Header/Header";
import { BrowserRouter as router } from "react-router-dom";
=======
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import MainCategory from "./pages/MainCategory"
>>>>>>> origin/AC-29-user-can-see-sub-categories-page-to-add-or-remove-items

const App = () => {
  const { productItems } = data;
  return (
<<<<<<< HEAD
    <div> 
      <router>
      <Header />
      </router>
    </div>
  );
};

export default App;
=======
    <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/MainCategory"  element={<MainCategory />} />
        </Routes>
    </Router>
  )
}
export default App;
>>>>>>> origin/AC-29-user-can-see-sub-categories-page-to-add-or-remove-items
