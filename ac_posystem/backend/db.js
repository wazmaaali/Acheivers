import express from "express";
import mysql from "mysql";

const app = express();

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
      console.log("Data: ", data);

      return res.json(data);
    }
  });
});
app.get("/", (req, res) => {
  res.json("Hello backend");
});

app.listen(8802, () => {
  console.log("Connect to backed");
});
