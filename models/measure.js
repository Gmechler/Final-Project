module.exports = function(sequelize, DataTypes) {
  const Measure = sequelize.define("Measure", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });

  Measure.associate = function(models) {
    Measure.hasMany(models.RecipeIngredients, {
      onDelete: "cascade"
    });
  };

  return Measure;
};
