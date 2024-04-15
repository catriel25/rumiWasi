const fs = require('fs');
const path = require('path');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const mesasFilePath = path.join(__dirname, '../database/mesas.json');
const mesasActivas = JSON.parse(fs.readFileSync(mesasFilePath, 'utf-8'));


const mesasController = {
    detalle : (req, res) =>{
        const mesaId = req.params.numeroMesa;
        const detalleMesa = mesasActivas.fin((mesas) => mesas.id == mesaId);
    },
    agregarPedidos : (req, res) => {
        
        //acá escribis la lógica trolo



        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2))
    }

}



module.exports = mesasController;