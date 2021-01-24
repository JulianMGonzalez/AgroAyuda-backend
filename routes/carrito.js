/* import routerx from 'express-promise-router';
import usuarioController from '../controllers/UsuarioController';
import auth from '../middlewares/auth'; */
const routerx = require('express-promise-router');
const CarritoController = require('../controllers/CarritoController');
const auth = require('../middlewares/auth');

const router = routerx();

router.post('/add', CarritoController.add);
router.get('/list',  CarritoController.list);
router.put('/update',  CarritoController.update);
router.put('/activate',  CarritoController.activate);
router.put('/deactivate', CarritoController.deactivate);

module.exports = router;