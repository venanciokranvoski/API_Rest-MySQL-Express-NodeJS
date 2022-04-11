import {Router} from 'express';
import UserController from '../controllers/UserController';

import loginRequired from '../middlewares/loginRequired'

const router = new Router();

router.post('/', UserController.store); // Create users 
router.get('/', loginRequired, UserController.index);
router.get('/:id', UserController.show);
router.put('/:id',loginRequired, UserController.update);
router.delete('/:id',loginRequired, UserController.delete);


export default router;

// funçoes de um controller Get
///index => lista de todosos usuarios
// store/create cria um novo usuaro
// delete
// show
//  update
// patch ´´e quando muda somente um valor
// e o put e quando atualiza o objeto inteiro.
//
//


