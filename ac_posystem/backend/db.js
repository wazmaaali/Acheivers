import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();

var dataCheck = [
  { id: 1, c_name: "Vegetables", c_img: "category-1.png" },
  { id: 2, c_name: "FRUITS", c_img: "category-2.png" },
  { id: 3, c_name: "MEAT", c_img: "category-3.png" },
  { id: 4, c_name: "DAIRY", c_img: "category-3.png" },
  { id: 5, c_name: "SWEETS", c_img: "category-3.png" },
  { id: 6, c_name: "FROZENOOD", c_img: "category-3.png" },
];
const sub_categories = [
  { sc_id: 1, sc_name: "OKRA", sc_image: "a.png", sc_price: "$10", c_id: 1 },
  { sc_id: 2, sc_name: "TOMATO", sc_image: "a.png", sc_price: "$11", c_id: 1 },
  { sc_id: 3, sc_name: "ONION", sc_image: "a.png", sc_price: "$12", c_id: 1 },
  { sc_id: 4, sc_name: "POTATO", sc_image: "a.png", sc_price: "$13", c_id: 1 },
  { sc_id: 8, sc_name: "SPINACH", sc_image: "a.png", sc_price: "$2", c_id: 1 },
  { sc_id: 9, sc_name: "CARROT", sc_image: "a.png", sc_price: "$4", c_id: 1 },
];
app.use(cors());

app.use(express.json());
let pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root1234",
  database: "achievers_schema",
});

app.get("/categories", (req, res) => {
  const q = "SELECT * FROM achievers_schema.categories";
  pool.query(q, (err, data) => {
    if (err) {
      console.log("Error: ", err);
      return res.json(err);
    } else {
      // console.log("Data: ", data);
      // const obj = Object.entries(data);
      // obj.forEach(([key, value]) => console.log(key, value));
      dataCheck = res.json(data);
      return res.json(data);
    }
  });
});

app.get("/sub_categories/:id", (req, res) => {
  console.log("999999 Constants.c_id in db: ", req.params.id);

  const sb_c =
    "SELECT * FROM achievers_schema.sub_categories WHERE c_id = " +
    req.params.id;
  pool.query(sb_c, (err, data) => {
    if (err) {
      console.log("Error: ", err);
      return res.json(err);
    } else {
      // console.log("Data: ", data);
      // const obj = Object.entries(data);
      // obj.forEach(([key, value]) => console.log(key, value));

      return res.json(data);
    }
  });
});

// app.get("/", (req, res) => {
//   res.json("Hello backend");
// });
// it("test the endpoint", async (done) => {
//   const request = supertest("http://localhost:3000");
//   request
//     .get("/")
//     .expect(200)
//     .end((err, res) => {
//       if (err) {
//         throw err;
//       } else {
//         expect(res.text).toEqual("direct use 1st");
//         done();
//       }
//     });
// });

app.listen(8803, () => {
  // console.log("Connect to backed");
});
// module.exports.SimpleMessage = "Hello world";
// export default function() {
//   return {};
// }

export function check() {
  return true;
}
export function dataCheckVal() {
  console.log("9999 : ", dataCheck);
  console.log("9999 : ", dataCheck.indexOf[1]);

  if (dataCheck != null) {
    return true;
  } else {
    return false;
  }
}

export function value() {
  return dataCheck;
}
export function subCatvalue() {
  return sub_categories;
}
