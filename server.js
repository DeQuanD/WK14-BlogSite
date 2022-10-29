const express = require("express");
const {engine} =require("express-handlebars")

const app = express()
const PORT = process.env.PORT || 3001

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine("handlebars", engine());
app.set("view engine", "handlebars")
app.set("views", "/.views");

app.listen(PORT, () => console.log(`Now Listening on ${PORT}`))