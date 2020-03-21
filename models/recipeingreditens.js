module.exports = function(sequelize, DataTypes) {
  const RecipeIngredients = sequelize.define("RecipeIngredients", {
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });

  RecipeIngredients.associate = function(models) {
    RecipeIngredients.belongsTo(models.Recipes, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  RecipeIngredients.associate = function(models) {
    RecipeIngredients.belongsTo(models.Ingredients, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  RecipeIngredients.associate = function(models) {
    RecipeIngredients.belongsTo(models.Measure, {
      foreignKey: {
        allowNull: true
      }
    });
  };

  return RecipeIngredients;
};
