const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "User",
    {
      identification: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },

      birthdate: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      adress: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      vaccination_status: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },

      vaccines: {
        type: DataTypes.ARRAY(DataTypes.ARRAY(DataTypes.STRING)), // [["a","b","v"],["a","b","v"]]
        allowNull: true,
        // get: function () {
        //   return JSON.parse(this.getDataValue("myArrayField"));
        // },
        // set: function (val) {
        //   return this.setDataValue("myArrayField", JSON.stringify(val));
        // },
      },
      employe: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      admin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      deleted:{
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    { timestamps: false }
  );
};
