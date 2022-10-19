import React from 'react'

class Home extends React.Component{
    render(){
        return(
        <div>
            <div class="container">

    <form action="">

    <div class="row">

        <div class="col">

            <h3 class="title">BILLING ADDRESS (OPTINAL)</h3>

            <div class="inputBox">
                <span>full name :</span>
                <input type="text" placeholder="Sam" />
            </div>
            <div class="inputBox">
                <span>email :</span>
                <input type="email" placeholder="Sam@example.com" />
            </div>
            <div class="inputBox">
                <span>Phone Number :</span>
                <input type="text" placeholder="+1-1234567890" />
            </div>

            <div >
                <div><img src="/asserts/images/cash.png" alt="Cash Icon" width="320" height="120" /></div>
                <div><input type="submit" value="Cash" class="submit" /> </div>
            </div>

        </div>

        <div class="col">

            <h3 class="title">payment</h3>

            <div class="inputBox">
                <span>cards accepted :</span>
                <img src="/asserts/images/card_img.png" alt="" />
            </div>
            <div class="inputBox">
                <span>name on card :</span>
                <input type="text" placeholder="Mr. Sam" />
            </div>
            <div class="inputBox">
                <span>credit card number :</span>
                <input type="number" placeholder="1111-2222-3333-4444" />
            </div>
            <div class="inputBox">
                <span>exp month :</span>
                <input type="text" placeholder="january" />
            </div>
            <div class="flex">
                <div class="inputBox">
                    <span>exp year :</span>
                    <input type="number" placeholder="2022" />
                </div>
                <div class="inputBox">
                    <span>CVV :</span>
                    <input type="text" placeholder="123" />
                </div>
            </div>

        </div>

    </div>

    <input type="submit" value="proceed to checkout" class="submit-btn" />

</form>

</div> 
        </div>
        ); 
    }
}

export default Home;