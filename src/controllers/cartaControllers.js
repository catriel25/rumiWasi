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
    
    editarCategoria: async (req,res) =>{
        
        try{
            
            await db.Categoria.update({
                nombre: req.body.categoriaEditada.toUpperCase()
                
            },{
                where: {
                    id : req.body.categoria
                }
            })
            res.redirect('/carta')
        }
        catch{
            return res.send('<h1> Ha ocurrido un error </h1>')
        }
    },
    detalleProducto: async (req, res) =>{
        try{
            let producto = await db.Carta.findByPk(req.params.id)
            res.render('detalleProducto', {producto});
        }
        catch{
            return res.send('<h1> Ha ocurrido un error </h1>')
        }

        
    },

    editarProducto: async (req,res) =>{
        try{
            
            await db.Carta.update({
                nombre: req.body.productoNombre,
                precio : req.body.productoPrecio
                
            },{
                where: {
                    id : req.params.id
                }
            })
            res.redirect('/carta')
        }
        catch{
            return res.send('<h1> Ha ocurrido un error </h1>')
        }
    },
    editarProducto2: async (req,res) =>{
        try{
            
            await db.Carta.update({
                nombre: req.body.productoNombre,
                precio : req.body.productoPrecio
                
            },{
                where: {
                    id : req.params.id
                }
            })
            res.redirect('/carta')
        }
        catch{
            return res.send('<h1> Ha ocurrido un error </h1>')
        }
    },
     
    

}

module.exports = cartaControllers;