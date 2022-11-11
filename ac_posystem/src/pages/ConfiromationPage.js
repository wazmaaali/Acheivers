import React from 'react'

function ConfiromationPage() {
  let total = window.sessionStorage.getItem("total");
  return (
    <div className="App">
      
      <h1 style={{textAlign: "center", fontFamily: "Times New Roman"}}><i>Thank you for Choosing our services and bill is {total} </i></h1>
      <div style={{border: "solid purple", borderRadius: "10px", margin: "10px", padding: "10px", backgroundImage: "linear-gradient(to right,#98ff98,#9ea8f5,#7cbcdc)"}}>The Total amount in the bill is:'z$23'</div>
      <h3 style={{textAlign: "center"}} >Please visit Again :-)</h3>
    </div>
  );
}

export default ConfiromationPage;