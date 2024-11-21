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

app.get("/home", (req, res) => {
  res.render("home")
})







// Sign up

app.post("/signup", async (req, res) => {
  const data = {
    name: req.body.username,
    password: req.body.password
  }

  const existingUser = await collection.findOne({name: data.name});

  if(existingUser) {
    res.render("signup")
  } else {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(data.password, saltRounds);

    data.password = hashedPassword;

    const userdata = await collection.insertMany(data);
    console.log(userdata);
    res.redirect("/home")
  }
})


// Login


app.post("/login", async (req, res) => {
  try{
    const check = await collection.findOne({name: req.body.username});
    if (!check) {
      res.render("login");
    }
    const isPasswordMatch = await bcrypt.compare(req.body.password, check.password);
    if (isPasswordMatch) {
      res.redirect("home")
    } else {
      req.render("login");
    }
  } catch{
    res.render("login")
  }
})





















const port = 5000;
app.listen(port, () => {
  console.log("Server running on Port", 27017);
})