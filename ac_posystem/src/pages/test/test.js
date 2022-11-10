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