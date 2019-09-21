const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("Helo World!"));
app.get("/info", (req, res) => res.send("asd"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
