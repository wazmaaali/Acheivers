import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MainCategory from "./pages/MainCategory";
import MainCategory from "./pages/Payment";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MainCategory" element={<MainCategory />} />
        <Route path="/Payment" element={<Payment />} />
      </Routes>
    </Router>
  );
}
export default App;
