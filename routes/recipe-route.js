const db = require("../models");

module.exports = function(app) {
  app.get("/api/recipe", function(req, res) {
    db.Recipes.findAll({}).then(function(dbRecipe) {
        console.log(dbRecipe);
      res.json(dbRecipe);
    });
  });
};