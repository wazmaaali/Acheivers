import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();

var dataCheck = "";
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
  console.log("Connect to backed");
});
// module.exports.SimpleMessage = "Hello world";
// export default function() {
//   return {};
// }

export function example() {
  return true;
}
// module.exports = {
//   example,
// };
