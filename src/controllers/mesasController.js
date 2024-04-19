const fs = require('fs');
const path = require('path');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const mesasFilePath = path.join(__dirname, '../database/mesas.json');



const mesasController = {
    
    detalle : async (req, res) => {
        try{
            const productos = await db.Carta.findAll();
            const categorias = await db.Categoria.findAll();
            let mesasActivas = JSON.parse(fs.readFileSync(mesasFilePath, 'utf-8'));
            const mesaId = req.params.numeroMesa; 

            let mesaActual = mesasActivas.find((mesa) => mesa.id == mesaId);
            res.render('detalleMesa', {productos, categorias, mesaActual});
        } 


        catch(error){
            console.error('error al obtener datos de la base de datos', error);
            res.status(500).send('error al obtener datos de la base de datos');
        }


    },

    agregarPedidos : async (req, res) => {
        try {
            const productos = await db.Carta.findAll();
            const mesaId = req.params.numeroMesa;
            const datosRecibidos = req.body;
            delete datosRecibidos.categoria
    
            let mesasActivas = JSON.parse(fs.readFileSync(mesasFilePath, 'utf-8'));

            
            mesasActivas.forEach(mesa => {
                if(mesa.id == mesaId){
                    Object.keys(datosRecibidos).forEach(clave => {
                        if(datosRecibidos[clave] == 0){
                            delete datosRecibidos[clave]
                        }
                        else{
                            let temp = {};
                            temp['cantidad'] =  parseInt(datosRecibidos[clave]);
                            const datosProducto = productos.find((producto) => producto.id == clave);
                            temp['precio'] = datosProducto.precio;
                            temp['id'] = parseInt(clave);
                            temp['nombre'] = datosProducto.nombre
                            mesa.pedidos.push(temp);
                            
                        }
                    })
                }
                });

        

            
 

            fs.writeFileSync(mesasFilePath, JSON.stringify(mesasActivas, null, 2))
            
            res.redirect('/mesas/' + mesaId);
        }
        catch(error){
            console.error('error al obtener datos de la base de datos', error);
            res.status(500).send('error al obtener datos de la base de datos');
        }


    }

}



module.exports = mesasController;