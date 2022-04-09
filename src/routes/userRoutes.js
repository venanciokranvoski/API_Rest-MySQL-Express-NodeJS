import {Router} from 'express';
import UserController from '../controllers/UserController';

const router = new Router();

router.post('/', UserController.store);

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


