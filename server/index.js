const express = require("express"); 
const app = express(); 
const mysql  = require('mysql')

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "mydb",
});

app.get("/", (req, res) => {
// const sqlInsert = "INSERT INTO table (product, total), VALUES ('apple','5000');"
const sqlInsert = "SELECT * From {}table;"
db.query(sqlInsert, (err,result) => {
    console.log(err,result)
    res.send("Sample");
});
});

app.listen(3001, () => {
    console.log("running on port 3001");
});