module.exports = (sequelize, dataTypes) => {
    let alias = 'Carta';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
            unique: true
        
        },
        nombre : {
            type: dataTypes.STRING,
            allowNull: false,
            unique: true
        },
        precio : {
            type: dataTypes.FLOAT,
            allowNull: false
        }}

    let config = {
        tablename: 'carta',
        timestamps : false,
    }
    
    const Carta = sequelize.define(alias, cols, config);

    return Carta;
}