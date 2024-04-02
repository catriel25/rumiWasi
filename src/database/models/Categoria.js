module.exports = (sequelize, dataTypes) => {
    let alias = 'Categoria';
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
    }
}

    let config = {
        tableName: 'categorias',
        timestamps : false,
    }
    
    const Categoria = sequelize.define(alias, cols, config);

    Categoria.associate = function(models) {
        Categoria.hasMany(models.Carta, {
            as: "carta",
            foreignKey: "categoria_id"

        });
    }

    return Categoria;
}