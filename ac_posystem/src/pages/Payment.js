import React from 'react'

class Payment extends React.Component {
    render() {
        return (
            <div>
                <div>

                    <div class="wrapper">
                        <div class=" a">
                            <div class="page">
                                <section class="shopping-cart dark" style={{margin:100}}>
                                    {/* <div class="container">
                                        <div class="block-heading">
                                        </div> */}
                                        
                                            <div class="summary">
                                                <h3>Summary</h3>
                                                <div class="summary-item"><span class="text">Subtotal</span><span class="price">$360</span>
                                                </div>
                                                <div class="summary-item"><span class="text">Discount</span><span class="price">$10</span></div>
                                                <div class="summary-item"><span class="text">Shipping</span><span class="price">$5</span></div>
                                                <div class="summary-item"><span class="text">Total</span><span class="price">$355</span></div>
                                                <button type="button" class="btn btn-primary btn-lg btn-block">Continue Shopping</button>
                                            </div>
                                        
                                    {/* </div> */}
                                </section>
                            </div>

                        </div>
                        <div class=" b">
                            <div className="container">

                                <form action="">

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

                                            <div >
                                                <div><img src="/asserts/images/wallet.jpeg" alt="Cash Icon" width="320" height="120" /></div>
                                                <div><input type="submit" value="Cash" className="submit" /> </div>
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
                                                <input type="number" placeholder="1111-2222-3333-4444" />
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

                                    <input type="submit" value="proceed to checkout" className="submit-btn" />

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