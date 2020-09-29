const express = require("express");
const routes = require("./routes/api.js");

//Set up express App
const app = express();

//Use the routes imported from api.js
app.use(routes);

//Listen for Request
app.listen(process.env.port || 4000, function () {
  console.log("Listening for request");
});
