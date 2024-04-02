module.exports = (sequelize, dataTypes) => {
    let alias = 'Ventas';
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

        total : {
            type: dataTypes.FLOAT,
            allowNull: false
        },
        mesa: {
            type: dataTypes.INTEGER
        }
    }

    let config = {
        tablename: 'ventas',
        timestamps: true,
        createdAt: 'fecha',
        updatedAt: false
    }
    
    const Ventas = sequelize.define(alias, cols, config);

    return Ventas;
}