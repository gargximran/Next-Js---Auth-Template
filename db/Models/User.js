const { DataTypes } = require("sequelize")
const connection = require("../connection");

const User = connection.define("User", {
    name: {
        type: DataTypes.STRING,
    },
    birthday: {type: DataTypes.DATE, default: new Date().toDateString()},
    profession: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING
})


module.exports = User
