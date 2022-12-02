import React from "react";

function ConfiromationPage() {
  var total = window.sessionStorage.getItem("totalsum") // Adding Section Storage to get the cart sum data"
  return (
    <div className="App">
      <h1 style={{ textAlign: "center", fontFamily: "Times New Roman" }}>
        <i>Thank you for Choosing our services</i> 
      </h1>
      <div
        style={{
          border: "solid purple",
          borderRadius: "10px",
          margin: "10px",
          padding: "10px",
          backgroundImage: "linear-gradient(to right,#98ff98,#9ea8f5,#7cbcdc)",
        }} //Styling the container 
      >
      </div>
      <h3 style={{ textAlign: "center" }}>Please visit Again :-)</h3>

    </div>
  );
}

export default ConfiromationPage;