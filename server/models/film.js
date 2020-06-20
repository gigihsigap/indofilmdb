'use strict';
module.exports = (sequelize, DataTypes) => {
  const Film = sequelize.define('Film', {
    titleID: DataTypes.STRING,
    titleEN: DataTypes.STRING,
    plotID: DataTypes.STRING,
    plotEN: DataTypes.STRING,
    poster: DataTypes.STRING,
    // genre: DataTypes.ARRAY,
    year: DataTypes.INTEGER,
    director: DataTypes.STRING,
    // cast: DataTypes.ARRAY
  }, {});
  Film.associate = function(models) {
    // associations can be defined here
  };
  return Film;
};