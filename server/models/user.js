'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class User extends Model {}
  User.init ({
    username: {
      type:DataTypes.STRING,
      validate:{
        notEmpty:{
          msg:'username cannot be empty'
        }
      }
    },
    password: DataTypes.STRING

  },{sequelize})
 
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};