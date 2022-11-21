import express from "express";
import mysql from "mysql";
import cors from "cors";
import * as fs from "fs";

import jsontxt from "./jsontxt.json" assert { type: "json" };
// import React, { Component } from "react";

const DATA_PATH = "jsontxt";

const app = express();

app.use(cors());

app.use(express.json());
//Create a mysql pool and get access of mySQL
let pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root1234",
  database: "achievers_schema",
});
//get categories from mySQL database
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
//get sub-categories with given categories id from mySQL database
app.get("/sub_categories/:id", (req, res) => {
  // console.log("999999 Constants.c_id in db: ", req.params.id);

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
//test url to check
app.get("/", (req, res) => {
  res.json("Hello backend");
});
//fetch daata from front end
app.post("/dataFromCart", function (req, res) {
  var countValue = req.body;
  console.log("99999 CountValue is", countValue);
  writeData(countValue);
});
//check the connection
app.listen(8803, () => {
  console.log("Connect to backed");
});
//Write data in file
const writeData = (data) => {
  if (readData() == "")
    fs.writeFile(DATA_PATH, JSON.stringify(data), (err) => {
      if (err) return console.error(err);
      console.log("Wrote data to ", DATA_PATH);
    });
  else {
    fs.appendFile(DATA_PATH, JSON.stringify(data), function (err) {
      if (err) throw err;
      console.log("Saved! ", data);
    });
  }
};
//read data from file
function readData() {
  fs.readFile("./jsontxt", "utf8", (err, jsonString) => {
    if (err) {
      console.log("File read failed:", err);
      return "";
    }
    console.log("File data:", jsonString);
    return jsonString;
  });
}
