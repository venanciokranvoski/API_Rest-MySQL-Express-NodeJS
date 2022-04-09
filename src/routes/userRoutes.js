import {Router} from 'express';
import UserController from '../controllers/UserController';

const router = new Router();

router.get('/', UserController.store);

export default router;
