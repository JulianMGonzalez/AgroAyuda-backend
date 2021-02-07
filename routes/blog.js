/* import routerx from 'express-promise-router';
import articuloController from '../controllers/ArticuloController';
import auth from '../middlewares/auth'; */
const routerx = require('express-promise-router');
const BlogController = require('../controllers/BlogController');
const auth = require('../middlewares/auth');

const router = routerx();

router.post('/add', auth.verifyUsuario, BlogController.add);
router.get('/list', BlogController.list);
router.put('/update', auth.verifyUsuario, BlogController.update);
router.put('/activate', auth.verifyUsuario, BlogController.activate);
router.put('/deactivate', auth.verifyUsuario, BlogController.deactivate);

module.exports = router;