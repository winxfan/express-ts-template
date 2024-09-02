import {body} from 'express-validator'

export const loginValidation = [
  body('username', "Неверный логин").isString().isLength({min: 3}),
]