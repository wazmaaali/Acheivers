import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();

app.use(cors());

app.use(express.json());
let pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
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

app.get("/", (req, res) => {
  res.json("Hello backend");
});

app.listen(8803, () => {
  console.log("Connect to backed");
});
