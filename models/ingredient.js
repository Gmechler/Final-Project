module.exports = function(sequelize, DataTypes) {
  const Ingredients = sequelize.define("Ingredients", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });

  Ingredients.associate = function(models) {
    Ingredients.hasMany(models.RecipeIngredients, {
      onDelete: "cascade"
    });
  };

  return Ingredients;
};
