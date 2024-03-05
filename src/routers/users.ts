import { Router } from 'express';
import { dashboard } from '../controller/users/controller';

const router = Router();

router.get('/dashboard', dashboard)

export default router;