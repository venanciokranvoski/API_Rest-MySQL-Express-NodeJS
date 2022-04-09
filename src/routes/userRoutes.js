import {Router} from 'express';
import UserController from '../controllers/UserController';

const router = new Router();

router.post('/', UserController.store);
router.get('/', UserController.index);
router.get('/:id', UserController.show);
router.put('/:id', UserController.update);
router.delete('/:id', UserController.delete);


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


