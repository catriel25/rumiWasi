const path = require('path');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");

const mesasController = {
    detalle : (req, res) =>{
        let mesaId = req.params.mesa;
        
    }
}

module.exports = mesasController;