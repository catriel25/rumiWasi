module.exports = (sequelize, dataTypes) => {
    let alias = 'Compras';
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
        },
        cantidad : {
            type: dataTypes.INTEGER,
            allowNull: false
        },

        precio_unitario : {
            type: dataTypes.FLOAT,
            allowNull: false
        },
        total : {
            type: dataTypes.FLOAT,
            allowNull: false
        }}

    let config = {
        tableName: 'compras',
        timestamps: true,
        createdAt: 'fecha',
        updatedAt: false

    }
    
    const Compras = sequelize.define(alias, cols, config);

    return Compras;
}