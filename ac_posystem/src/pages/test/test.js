import React from 'react';
import MainCategory from '../MainCategory';
import {render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe("This suit is to test the Body component", ()=>{
   
    test("finding title", ()=>{
        const {getByText} = render(<Body h1="Achievers Grocery"/>);
        expect(getByText("Achievers Grocery")).toBeInTheDocument("Achievers Grocery")
    })
})

describe("Cart total", ()=>{
   
    test("Checking cart", ()=>{
        const cart = [
            { cart: "Apple", price: 500 },
            { cart: "Mango", price: 50 },
            { cart: "Melon", price: 60 },
            { cart: "Berry", price: 30 },
            { cart: "Jack", price: 200 },
        ]
        // Calculations.getSum(cart);
        expect(Calculations.getSum(cart)).toEqual(840);
    })
})

// describe("Cart total", ()=>{
   
//     test("Checking check", ()=>{
//         const cart = [
//             { cart: "Apple", price: 500 },
//             { cart: "Mango", price: 50 },
//             { cart: "Melon", price: 60 },
//             { cart: "Berry", price: 30 },
//             { cart: "Jack", price: 200 },
//         ]
//         expect(cart.length).toEqual(0);
//     })
// })

// test('render the title of an application', () => { 
//     test("Checking check", ()=>{
//     const titleEl = screen.getByText(/src/MainCategory);
//     expect(titleEl).toBeInTheDocument();
//     })
//   });