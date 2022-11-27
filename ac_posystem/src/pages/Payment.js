import React from 'react'
import { Link } from "react-router-dom";

class Payment extends React.Component {  
    render() {

        {/* Section Storage*/}
        // let total = window.sessionStorage.getItem("total");
        // let tax = 10000 + total;
        // // console.log(window.sessionStorage.getItem("total"))

        {/* HTML Code*/}
        return (
            <div>
                <div>
                    <div class="wrapper"> 

                        <div class=" a"> {/*List of Items Sections*/}
                            <div class="page"> 
                                <section class="shopping-cart dark" style={{margin:100}}>
                                    {/* <div class="container">
                                        <div class="block-heading">
                                        </div> */}
                                            <div class="summary"> {/* Calculated Details*/}
                                                <h3>Summary</h3>
                                                <div class="summary-item"><span class="text">Subtotal</span><span class="price">$360</span></div> {/*Subtotal*/}
                                                <div class="summary-item"><span class="text">Discount</span><span class="price">$10</span></div>{/*Discount*/}
                                                <div class="summary-item"><span class="text">Shipping</span><span class="price">$5</span></div>{/*Shipping*/}
                                                <div class="summary-item"><span class="text">Total</span><span class="price">$355</span></div>{/*Total*/}
                                                <button type="button" class="btn btn-primary btn-lg btn-block">Continue Shopping</button>
                                            </div>
                                    {/* </div> */}
                                </section>
                            </div>
                        </div>

                        <div class=" b"> {/* Payment Deatils Section */}
                            <div className="container">
                                <form action="/ConfiromationPage">  {/*Details Form*/}

                                    <div className="row">

                                        <div className="col">

                                            <h3 className="title">BILLING ADDRESS (OPTINAL)</h3>

                                            <div className="inputBox"> {/*Full Name*/}
                                                <span>full name :</span>
                                                <input type="text" placeholder="Sam" />
                                            </div>
                                            <div className="inputBox">{/*Email*/}
                                                <span>email :</span>
                                                <input type="email" placeholder="Sam@example.com" />
                                            </div>
                                            <div className="inputBox">{/*Phone Number*/}
                                                <span>Phone Number :</span>
                                                <input type="text" placeholder="+1-1234567890" />
                                            </div>
                                            <div >
                                                <div><img src="/asserts/images/wallet.jpeg" alt="Cash Icon" width="320" height="120" /></div>
                                                <div><input type="submit" value="Cash" className="submit" /> </div> {/*Cash Button*/}
                                            </div>

                                        </div>

                                        <div className="col"> {/*Card Details*/}

                                            <h3 className="title">payment</h3>

                                            <div className="inputBox">
                                                <span>cards accepted :</span>
                                                <img src="/asserts/images/card_img.png" alt="" />
                                            </div>
                                            <div className="inputBox"> {/*Name*/}
                                                <span>name on card :</span>
                                                <input type="text" placeholder="Mr. Sam" />
                                            </div>
                                            <div className="inputBox">{/*CArd Number*/}
                                                <span>credit card number :</span>
                                                <input type="number" placeholder="1111-2222-3333-4444" />
                                            </div>
                                            <div className="inputBox">
                                                <span>exp month :</span> {/*Exp Month*/}
                                                <input type="text" placeholder="january" />
                                            </div>
                                            <div className="flex">
                                                <div className="inputBox"> {/*Exp Year*/}
                                                    <span>exp year :</span>
                                                    <input type="number" placeholder="2022" />
                                                </div>
                                                <div className="inputBox"> {/*CVV*/}
                                                    <span>CVV :</span>
                                                    <input type="text" placeholder="123" />
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                    
                                 <input type="submit" value="proceed to checkout" className="submit-btn" /> {/*Submit Button*/}
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