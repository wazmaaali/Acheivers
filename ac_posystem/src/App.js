import './App.css'

function App() {
  return (

    <div class="container">

    <form action="">

        <div class="row">

            <div class="col">

                <h3 class="title">Billing address</h3>

                <div class="inputBox">
                <label>Enter your name:<input type="text" /></label>
                </div>
                <div class="inputBox">
                <label>Enter your Email:<input type="email" /></label>
                </div>

                <div class="inputBox">
                <label>Enter your Address:<input type="text" /></label>
                </div>

                <div class="inputBox">
                <label>Enter your City:<input type="text" placeholder="mumbai"/></label>
                </div>

                <div class="flex">
                    <div class="inputBox">
                    <label>Enter your state:<input type="text" placeholder="AP"/></label>
                    </div>
                    <div class="inputBox">
                    <label>Enter your zip code:<input type="text" /></label>
                    </div>
                </div>

            </div>

            <div class="col">

                <h3 class="title">payment</h3>

                <div class="inputBox">
                    <span>cards accepted :</span>
                    
                </div>
                <div class="inputBox">
                    <label>name on card:<input type="text" /></label>
                </div>
                <div class="inputBox">
                <label>credit card number:<input type="number" /></label>
                </div>

                <div class="inputBox">
                <label>exp month:<input type="text" /></label>
                </div>

                <div class="flex">
                    <div class="inputBox">
                    <label>exp year:<input type="number" /></label>
                    </div>

                    <div class="inputBox">
                    <label>CVV:<input type="text" /></label>
                    </div>
                </div>

            </div>
    
        </div>
        
        <label>proceed to checkout :<input type="submit" /></label>

    </form>

</div>  

  );
}

export default App;
