'use strict';
module.exports = (sequelize, DataTypes) => {
  const Game = sequelize.define('Game', {
      id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true
      },
      name: DataTypes.STRING,
      platform: DataTypes.STRING,
      category: DataTypes.STRING

  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Game;
};