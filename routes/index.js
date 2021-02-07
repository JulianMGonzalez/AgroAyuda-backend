const routerx = require('express-promise-router');
const categoriaRouter = require('./categoria');
const articuloRouter = require('./articulo');
const usuarioRouter = require('./usuario');
const ventaRouter = require('./venta');
const blogRouter = require('./blog');


const router = routerx();

router.use('/categoria', categoriaRouter);
router.use('/articulo', articuloRouter);
router.use('/usuario', usuarioRouter);
router.use('/venta', ventaRouter);
router.use('/blog', blogRouter);



module.exports = router;