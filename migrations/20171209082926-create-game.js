'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Games', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
        platform: Sequelize.STRING,
        category: Sequelize.STRING,
        ps4Supported: {
          allowNull: false,
          type: Sequelize.BOOLEAN
        },
        ps3Supported: {
            allowNull: false,
            type: Sequelize.BOOLEAN
        },
        ps2Supported: {
            allowNull: false,
            type: Sequelize.BOOLEAN
        },
        ps1Supported: {
            allowNull: false,
            type: Sequelize.BOOLEAN
        },
        xboxSupported: {
            allowNull: false,
            type: Sequelize.BOOLEAN
        },
        wiiSupported: {
            allowNull: false,
            type: Sequelize.BOOLEAN
        },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },

      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Games');
  }
};