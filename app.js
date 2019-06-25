const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const createHTMLApiRoute = require("./routes/create.html.api.route");
const callHTMLApiRoute = require("./routes/call.html.api.route");
const exampleApiRoute = require("./routes/example.html.api.route");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.text());

app.use("/", createHTMLApiRoute);
app.use("/run", callHTMLApiRoute);
app.use("/example", exampleApiRoute);

module.exports = app;
