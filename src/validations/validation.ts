import {param} from 'express-validator'

export const idValidation = [
  param('id', 'Error id').isLength({min: 24})
]