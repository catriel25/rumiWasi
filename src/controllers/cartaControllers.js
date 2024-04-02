const path = require('path');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");

const cartaControllers = {

    nuevo: (req, res)=>{
        
        res.render('cartaAdd');
    }

}

module.exports = cartaControllers;