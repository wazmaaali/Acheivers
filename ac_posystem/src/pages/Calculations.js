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

        cart.forEach(item => {
            total = total + item.price;
            ship = total + 13
        });
        console.log(total)
        window.sessionStorage.setItem("total", total);
        window.sessionStorage.setItem("ship", ship);
        return (
              <p>calculation worked</p>
          );
    }
}

export default Calculations;