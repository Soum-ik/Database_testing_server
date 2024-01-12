const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();
const port = 8000;
app.use(cors());

app.get("/", async (req, res) => {
  res.send("Hello, I'm server. I'm fine let's start to work with you!");
  console.log(res);
});

app.listen(port, () => {
  console.log("Mysql application Listening to port are:", port);
});
