const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    const Persona = sequelize.define('persona', {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        dni: {
            type: DataTypes.INTERGER,
            allowNull: false,
            primaryKey: true
        },
        lastName: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        celular: {
            type: DataTypes.INTERGER,
            allowNull: false
        },
    });

};