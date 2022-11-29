import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Payment extends React.Component {
  //call backend when payment button is clicked and pass the sessionStorage data to backend

  sendData() {
    // POST request using fetch inside useEffect React hook
    const itemss = JSON.parse(sessionStorage.getItem("items"));
    itemss.forEach((item) => {
      item.sc_image = "";
    });
    axios
      .post("http://localhost:8803/updateInventory", itemss)
      .then((res) => {
        console.log(res);
        console.log(res.data);
      })
      .catch((error) => console.log("Error: ", error));
  }

  render() {
    return (
      <div>
        <div>
          <div className="wrapper">
            <div className=" a">
              <div className="page">
                <section className="shopping-cart dark" style={{ margin: 100 }}>
                  {/* <div className="container">
                                        <div className="block-heading">
                                        </div> */}

                  <div className="summary">
                    <h3>Summary</h3>
                    <div className="summary-item">
                      <span className="text">Subtotal</span>
                      <span className="price">$360</span>
                    </div>
                    <div className="summary-item">
                      <span className="text">Discount</span>
                      <span className="price">$10</span>
                    </div>
                    <div className="summary-item">
                      <span className="text">Shipping</span>
                      <span className="price">$5</span>
                    </div>
                    <div className="summary-item">
                      <span className="text">Total</span>
                      <span className="price">$355</span>
                    </div>
                    <button
                      type="button"
                      className="btn btn-primary btn-lg btn-block"
                    >
                      Continue Shopping
                    </button>
                  </div>

                  {/* </div> */}
                </section>
              </div>
            </div>
            <div className=" b">
              <div className="container">
                <form action="/ConfiromationPage">
                  <div className="row">
                    <div className="col">
                      <h3 className="title">BILLING ADDRESS (OPTINAL)</h3>

                      <div className="inputBox">
                        <span>full name :</span>
                        <input type="text" placeholder="Sam" />
                      </div>
                      <div className="inputBox">
                        <span>email :</span>
                        <input type="email" placeholder="Sam@example.com" />
                      </div>
                      <div className="inputBox">
                        <span>Phone Number :</span>
                        <input type="text" placeholder="+1-1234567890" />
                      </div>

                      <div>
                        <div>
                          <img
                            src="/asserts/images/wallet.jpeg"
                            alt="Cash Icon"
                            width="320"
                            height="120"
                          />
                        </div>
                        <div>
                          <input
                            type="submit"
                            value="Cash"
                            className="submit"
                          />{" "}

                        </div>
                      </div>
                    </div>

                    <div className="col">
                      <h3 className="title">payment</h3>

                      <div className="inputBox">
                        <span>cards accepted :</span>
                        <img src="/asserts/images/card_img.png" alt="" />
                      </div>
                      <div className="inputBox">
                        <span>name on card :</span>
                        <input type="text" placeholder="Mr. Sam" />
                      </div>
                      <div className="inputBox">
                        <span>credit card number :</span>
                        <input
                          type="number"
                          placeholder="1111-2222-3333-4444"
                        />
                      </div>
                      <div className="inputBox">
                        <span>exp month :</span>
                        <input type="text" placeholder="january" />
                      </div>
                      <div className="flex">
                        <div className="inputBox">
                          <span>exp year :</span>
                          <input type="number" placeholder="2022" />
                        </div>
                        <div className="inputBox">
                          <span>CVV :</span>
                          <input type="text" placeholder="123" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    value="proceed to checkout"
                    className="submit-btn"
                    onClick={this.sendData}
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default Payment;
