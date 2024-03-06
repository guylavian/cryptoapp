import { Router } from 'express';
import { addSymbol, dashboard } from '../controllers/users/controller';
import validate from '../middlewares/error/input-validator';
import { addSymbolValidator } from '../controllers/users/validator';

const router = Router();

router.get('/dashboard', dashboard);
router.post('/symbols/add', validate(addSymbolValidator), addSymbol )

export default router;