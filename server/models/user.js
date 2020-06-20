'use strict';
const {hashPassword} = require('../helpers/bcryptjs.js');

module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class User extends Model {}

  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Please insert an username!'
        },
        validUsername(value) {
          let regex =  RegExp('(?=.{3,})')
          if (!regex.test(value)) {
            throw new Error("Username needs to have at least 3 characters long!");
          }
        },
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Please insert an email address!'
        },
        isEmail: {
          msg: 'The email is not in the right format!'
        },
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Please insert a password!'
        },
        validPassword(value) {
          let regex =  RegExp('(?=.{7,})')
          if (!regex.test(value)) {
            throw new Error("Password needs to have at least 7 characters!");
          }
        },
      }
    },
    avatar: {
      type: DataTypes.STRING,
    },
    role: {
      type: DataTypes.STRING,
    },
  }, {
    hooks: {
      beforeCreate: (instance, options) => {
        let inputPass = instance.password
        instance.password = hashPassword(inputPass)
        if (!instance.role) {
          instance.role = 'member'
        }
      }
    },
    sequelize,
  })

  User.associate = function (models) {
    // associations can be defined here
  };
  return User;
};