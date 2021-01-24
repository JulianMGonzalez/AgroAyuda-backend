//import models from '../models';
const models = require('../models');

module.exports = {
    add: async(req, res, next) => {
        try {
            const reg = await models.Carrito.create(req.body);
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error'
            });
            next(e);
        }
    },
    list: async(req, res, next) => {
        try {
         
            const register = await models.Carrito.findAll();
            if(register){
                res.status(200).json(register);
            }else{
                res.status(404).send({//404: usuario no encontrado
                    message: 'Ventas no registradas'
                }) 
            }
           
        } catch (error) {
            res.status(500).send({ //500 error con el servidor
                message: 'Error -> servidor' 
            })
            next(error);
        }
    },
    update: async(req, res, next) => {
        try {
            console.log(req.body);
            const reg = await models.Carrito.update({ VentaId: req.body.Venta, codigo: req.body.codigo, nombre: req.body.nombre, descripcion: req.body.descripcion}, { where: { id: req.body.id } });

            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error'
            });
            next(e);
        }
    },
    activate: async(req, res, next) => {
        try {
            const reg = await models.Carrito.update({ estado: 1 }, { where: { id: req.body.id } });
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error'
            });
            next(e);
        }
    },
    deactivate: async(req, res, next) => {
        try {
            const reg = await models.Carrito.update({ estado: 0 }, { where: { id: req.body.id } });
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error'
            });
            next(e);
        }
    }
}