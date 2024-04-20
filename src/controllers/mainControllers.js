const fs = require('fs');
const path = require('path');
const mesasFilePath = path.join(__dirname, '../database/mesas.json');


const mainControllers = {

    index: (req, res)=>{
        const mesasActivas = JSON.parse(fs.readFileSync(mesasFilePath, 'utf-8'));
        res.render('home', {mesasActivas});
    },
    agregarMesa: (req, res) =>{
        let mesaId = req.body.mesaId
        const mesasActivas = JSON.parse(fs.readFileSync(mesasFilePath, 'utf-8'));
        const mesaExiste = mesasActivas.find((mesa) => mesa.id == mesaId);

        if (!mesaExiste) {
            const nuevaMesa = {
                id: parseInt(mesaId),
                pedidos : []
            }
    
            mesasActivas.push(nuevaMesa);
    
            fs.writeFileSync(mesasFilePath, JSON.stringify(mesasActivas, null, 2))
        
            res.redirect('/mesas/' + mesaId);
        }
        
        else{
            mensajeError = 'La mesa ' + mesaId + ' ya existe.'
            res.render('home', {mesasActivas, mensajeError});
        }

    },

}

module.exports = mainControllers;