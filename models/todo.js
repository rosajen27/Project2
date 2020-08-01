module.exports = function(sequelize, DataTypes) {
  var songster = sequelize.define("Songster", {
    text: DataTypes.STRING,
    complete: DataTypes.BOOLEAN
  });
  return songster;
};

