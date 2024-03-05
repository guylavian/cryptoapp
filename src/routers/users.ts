import { Router } from 'express';
import { addSymbol, dashboard } from '../controller/users/controller';

const router = Router();

router.get('/dashboard', dashboard);
router.post('/Symbol/add', addSymbol);

export default router;