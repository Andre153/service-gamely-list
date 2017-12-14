'use strict';
module.exports = (sequelize, DataTypes) => {
    const UserGame = sequelize.define('UserGame', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        uuid: DataTypes.STRING,
        gameId: DataTypes.INTEGER,
        status: DataTypes.STRING
    }, {
        classMethods: {
            associate: function(models) {
                // associations can be defined here
            }
        }
    });
    return UserGame;
};