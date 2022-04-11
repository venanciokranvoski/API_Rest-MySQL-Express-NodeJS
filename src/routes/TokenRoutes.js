import { Router } from 'express';
import tokencontroller from '../controllers/TokenController';

const router = new Router();

router.post('/', tokencontroller.store);


export default router;
