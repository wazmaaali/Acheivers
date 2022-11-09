import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import ReactDOM from "react-dom";
import Home from "../pages/Home";
import TestUtils from "react-dom";
describe("ToggleComponent", () => {
  it("Should be true", () => {
    const test = true;
    expect(test).toBe(true);
  });
});

it("renders an h1", function () {
  var component = TestUtils.renderIntoDocument(<Home />); // .renderIntoDocument(<Home />);

  var h1 = TestUtils.findRenderedDOMComponentWithTag(component, "h1");

  expect(h1.getDOMNode().textContent).toEqual("Achievers Grocery");
});

// describe("If on Category button clicked", () => {
//   it("renders without crashing", () => {
//     const div = document.createElement("div");
//     ReactDOM.render(<App />, div);
//   });
// });
