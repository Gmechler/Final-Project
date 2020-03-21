module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define("User", {
    //sets up the table that will hold all of the users
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8]
      }
    }
  });
  //states that the user will have many meals for their weekly meal list
  User.associate = function(models) {
    User.hasMany(models.Meals, {
      onDelete: "cascade"
    });
  };
  //states the the user will have many list items for their shopping list
  User.associate = function(models) {
    User.hasMany(models.Lists, {
      onDelete: "cascade"
    });
  };

  return User;
};
