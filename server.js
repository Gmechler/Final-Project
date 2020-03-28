const express = require("express");

const app = express();
const PORT = process.env.PORT || 3001;
const db = require("./models");
//defines middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//serves static assests
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
//adds the routes
require("./routes/user-api-route")(app);
require("./routes/recipe-route")(app);
//sets up the connection and makes the database
//if force: true is present will always overide your current database
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
