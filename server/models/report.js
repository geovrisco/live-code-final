'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Report extends Model{}

  Report.init({
    cases: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER,
    CountryId: DataTypes.INTEGER

  },{sequelize})

  Report.associate = function(models) {
    // associations can be defined here
    Report.belongsTo(models.Country,{foreignKey:'CountryId'})
  };
  return Report;
};