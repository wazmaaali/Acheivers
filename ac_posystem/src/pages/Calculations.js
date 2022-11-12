import React from 'react'

class Calculations extends React.Component {
    render() {
        const cart = [
            { cart: "Apple", price: 500 },
            { cart: "Mango", price: 50 },
            { cart: "Melon", price: 60 },
            { cart: "Berry", price: 30 },
            { cart: "Jack", price: 200 },
        ]
        let total = 0;
        let tax = 0;
        let ship = 0;

        cart.forEach(item => {
            total = total + item.price;
        });

        tax = total * 0.18;
        ship = total + 10; 

        console.log(total)
        window.sessionStorage.setItem("total", total);
        window.sessionStorage.setItem("tax", tax);
        window.sessionStorage.setItem("ship", ship);
        return (
              <p>calculation worked</p>
          );
    }
}

export default Calculations;