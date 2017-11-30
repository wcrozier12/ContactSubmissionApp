const express = require('express');
const bodyParser = require("body-parser");
const PORT =  process.env.PORT || 3002;
const routes = require('./routes/routes');
const client = require('./config/connection');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static("public"));
app.use(routes);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});