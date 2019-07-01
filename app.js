const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const listEndpoints = require("express-list-endpoints");

const createHTMLApiRoute = require("./routes/create.html.api.route");
const callHTMLApiRoute = require("./routes/call.html.api.route");
const exampleApiRoute = require("./routes/example.html.api.route");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.text());

app.use("/", createHTMLApiRoute);
app.use("/run", callHTMLApiRoute);
app.use("/example", exampleApiRoute);

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res
    .set({ "Content-Type": "application/json; charset=utf-8" })
    .send(JSON.stringify(listEndpoints(app), undefined, " "));
});

module.exports = app;
