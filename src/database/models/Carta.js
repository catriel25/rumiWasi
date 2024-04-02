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
        },
        categoria_id: {
            type: dataTypes.STRING,
            unique: true
        }
    }

    let config = {
        tableName: 'carta',
        timestamps : false,
    }
    
    const Carta = sequelize.define(alias, cols, config);

    Carta.associate = function(models) {
        Carta.belongsTo(models.Categoria, {
            as: "categorias",
            foreignKey: "categoria_id"

        });
    }

    return Carta;
}