module.exports = function(sequelize, DataTypes) {
  const Recipes = sequelize.define("Recipes", {
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    instructions: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });
  Recipes.associate = function(models) {
    Recipes.hasMany(models.RecipeIngredients, {
      onDelete: "cascade"
    });
  };

  return Recipes;
};
