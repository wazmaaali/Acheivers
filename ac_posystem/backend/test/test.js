import express from "express";
import supertest from "supertest";
import { toBeEmpty } from "@testing-library/jest-dom/dist/matchers";
import { shallow } from "enzyme";

const app = express();

// //1
// describe("Get Data for category", () => {
//   it("respond with valid data", async function (done) {
//     // Make POST Request
//     const response = await supertest(app).get(
//       "http://localhost:8803/categories"
//     );

//     // Compare response with expectations
//     expect(response.body).toBe(!toBeEmpty);
//   });
// });
//2

describe("If on Category button clicked", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});


//3 Redirection check 1
describe("If on Category button clicked", () => {
  let a = "/Home";

  it("redirection test", function (redirect) {
    request(app).get("/Home").expect(200, redirect);
  });
});

//4 Redirection check 2

describe("If on Category button clicked", () => {
  let a = "/MainCategory";

  it("redirection test", function (redirect) {
    request(app).get("/MainCategory").expect(200, redirect);
  });
});

//5
describe("[UNIT] Testing the App component", () => {
  let wrapper;

  // 2. A Jest setup helper function
  beforeEach(() => {
    // 3. Enzyme's shallow rendering
    wrapper = shallow(<App />);
  });

  describe("Component validation", () => {
    // 4. Our unit test, checking if the initial value is 0
    it("displays 0 as a default value", () => {
      expect(wrapper.find("h1").text()).toContain("VEGETABLES");
    });
  });
});
