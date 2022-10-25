import React from 'react'

class Home extends React.Component{
    render(){
        return(
    <div>
      <ul>
	  <li><a class="back" href="#back">Back</a></li>
	  <li><a class="active" href="#home">Home</a></li>
	  <li><a href="#contact">Contact</a></li>
	  <li style="float:right"><a href="#about">About</a></li>
	</ul> 
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
                <div><img src="/asserts/images/image3.jpeg" alt="Cash Icon" width="320" height="120" /></div>
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
        ); 
    }
}

export default Home;