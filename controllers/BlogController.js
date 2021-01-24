const models = require('../models');
const Blog = require('../models').blog;

module.exports = {
    add: async(req, res, next) => {
        try {
            const reg = await models.Articulo.create(req.body);
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
         
            const register = await models.Blog.findAll();
            if(register){
                res.status(200).json(register);
            }else{
                res.status(404).send({//404: usuario no encontrado
                    message: 'Blog no registradas'
                }) 
            }
           
        } catch (error) {
            res.status(500).send({ //500 error con el servidor
                message: 'Error -> servidor' 
            })
            next(error);
        }
    },
    activate: async(req, res, next) => {
        try {
            const reg = await models.Blog.update({ estado: 1 }, { where: { id: req.body.id } });
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
            const reg = await models.Blog.update({ estado: 0 }, { where: { id: req.body.id } });
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error'
            });
            next(e);
        }
    }
}