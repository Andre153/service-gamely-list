'use strict';
module.exports = (sequelize, DataTypes) => {
  const Game = sequelize.define('Game', {
      id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true
      },
      uuid: {
          allowNull: false,
          type: DataTypes.STRING
      },
      name: DataTypes.STRING,
      category: DataTypes.STRING,
      ps4Supported: {
          allowNull: false,
          type: DataTypes.BOOLEAN
      },
      ps3Supported: {
          allowNull: false,
          type: DataTypes.BOOLEAN
      },
      ps2Supported: {
          allowNull: false,
          type: DataTypes.BOOLEAN
      },
      ps1Supported: {
          allowNull: false,
          type: DataTypes.BOOLEAN
      },
      xbox360Supported: {
          allowNull: false,
          type: DataTypes.BOOLEAN
      },
      xboxoneSupported: {
          allowNull: false,
          type: DataTypes.BOOLEAN
      },
      wiiSupported: {
          allowNull: false,
          type: DataTypes.BOOLEAN
      },

  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Game;
};