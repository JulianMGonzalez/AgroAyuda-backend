/* import routerx from 'express-promise-router';
import usuarioController from '../controllers/UsuarioController';
import auth from '../middlewares/auth'; */
const routerx = require('express-promise-router');
const VentaController = require('../controllers/VentaController');
const auth = require('../middlewares/auth');

const router = routerx();

router.post('/add', VentaController.add);
router.get('/list', VentaController.list);
router.put('/update',  VentaController.update);
router.put('/activate',  VentaController.activate);
router.put('/deactivate', VentaController.deactivate);

module.exports = router;