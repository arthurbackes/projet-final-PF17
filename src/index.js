const express = require("express");
const bcrypt = require("bcrypt");
const path = require("path");
const app = express();
const collection = require("./config");
const exp = require("constants");


app.use(express.json());

app.use(express.urlencoded({extended: false}))


app.set("view engine", "ejs");

app.use(express.static("public"));


app.get("/", (req, res) => {
  res.render("login");
})

app.get("/signup", (req, res) => {
  res.render("signup")
})


app.post("/signup", async (req, res) => {
  const data = {
    name: req.body.username,
    password: req.body.password
  }

  const existingUser = await collection.findOne({name: data.name});

  if(existingUser) {
    res.send("User existe déjà bouffon")
  }


  const userdata = await collection.insertMany(data);
  console.log(userdata);
})



const port = 5000;
app.listen(port, () => {
  console.log("Server running on Port", 27017);
})