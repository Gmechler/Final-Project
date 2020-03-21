module.exports = function(sequelize, DataTypes) {
  //sets up the meals of the week table in the db
  const Meals = sequelize.define("Meals", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    link: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });
  //makes it so that meals of the week must belong to a user
  Meals.associate = function(models) {
    Meals.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Meals;
};
