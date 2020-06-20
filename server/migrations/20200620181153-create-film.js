'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Films', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      titleID: {
        type: Sequelize.STRING
      },
      titleEN: {
        type: Sequelize.STRING
      },
      plotID: {
        type: Sequelize.STRING
      },
      plotEN: {
        type: Sequelize.STRING
      },
      poster: {
        type: Sequelize.STRING
      },
      genre: {
        type: Sequelize.ARRAY
      },
      year: {
        type: Sequelize.INTEGER
      },
      director: {
        type: Sequelize.STRING
      },
      cast: {
        type: Sequelize.ARRAY
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Films');
  }
};