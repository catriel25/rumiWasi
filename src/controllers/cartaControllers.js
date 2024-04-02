const path = require('path');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");

const cartaControllers = {

    list: async (req, res) => {
        try{
            const productos = await db.Carta.findAll();
            const categorias = await db.Categoria.findAll();
            res.render('carta', {productos, categorias});
    } 
        catch(error){
            console.error('error al obtener datos de la base de datos', error);
            res.status(500).send('error al obtener datos de la base de datos');
        }
    },

    agregarProducto: async (req, res) => {
        let productoAgregado = req.body.producto
        let existingProduct = await db.Carta.findOne({
            where: {
                nombre : productoAgregado
            }})
        if(existingProduct){ //acá chequeo la poronga esta de si ya existe el producto
            const productos = await db.Carta.findAll();
            const categorias = await db.Categoria.findAll();
            return res.render('carta', {productos, categorias, productoAgregado});
        }
        
        db.Carta.create({
            categoria_id : req.body.categoria,
            nombre: req.body.producto,
            precio: req.body.precio
        })
        .then(function(){
            res.redirect('/carta')
        })
    },
    
    agregarCategoria: (req, res) => {
        db.Categoria.create({
            nombre: req.body.categoria.toUpperCase()
        })
        .then(function(){
            res.redirect('/carta')
        })
    },
    
    modificarCategoria: async (req,res) =>{
        
    } 
    

}

module.exports = cartaControllers;