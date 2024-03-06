import Joi from 'joi';
import { Model } from './../../models/user-symbol/model';
import { DTO } from '../../models/user-symbol/dto';

export const addSymbolValidator = Joi.object<DTO>({
    symbol: Joi.string().length(3).uppercase().required()

})