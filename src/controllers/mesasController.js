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


    },

    editarPedidos: (req, res) => {
        let mesasActivas = JSON.parse(fs.readFileSync(mesasFilePath, 'utf-8'));
        const mesaId = req.params.numeroMesa;
        const datosRecibidos = req.body;
        

        mesasActivas.forEach((mesa) =>{
            if(mesa.id == mesaId){
                mesa.pedidos.forEach((pedido, i) =>{
                    if (datosRecibidos[i] == 0){
                        mesa.pedidos.splice(i, 1);
                    }
                    else{
                        pedido.cantidad = datosRecibidos[i];
                    }
                })
            }
        })

        fs.writeFileSync(mesasFilePath, JSON.stringify(mesasActivas, null, 2))
        

        res.redirect('/mesas/' + mesaId);
    },

    eliminarMesa: (req, res) =>{
        let mesasActivas = JSON.parse(fs.readFileSync(mesasFilePath, 'utf-8'));
        const mesaId = req.params.numeroMesa;
        
        let indice = mesasActivas.findIndex(elemento => elemento.id == mesaId);

        mesasActivas.splice(indice, 1);

        fs.writeFileSync(mesasFilePath, JSON.stringify(mesasActivas, null, 2))


        res.redirect('/');
    },

    cerrarMesa: async (req, res) => {
        let mesasActivas = JSON.parse(fs.readFileSync(mesasFilePath, 'utf-8'));
        const mesaId = parseInt(req.params.numeroMesa);
        let indice = mesasActivas.findIndex(elemento => elemento.id == mesaId);
        mesasActivas[indice].pedidos.forEach((pedido) =>{
            try {
                db.Ventas.create({
                    nombre: pedido.nombre,
                    cantidad: pedido.cantidad,
                    total: (pedido.precio * pedido.cantidad),
                    mesa: mesaId
                })

            }
            catch{
                return res.send('<h1> Ha ocurrido un error </h1>')
            }
        
        })

        mesasActivas.splice(indice, 1);

        fs.writeFileSync(mesasFilePath, JSON.stringify(mesasActivas, null, 2))

        res.redirect('/');
    }


}



module.exports = mesasController;