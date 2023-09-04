const {check} = require('express-validator') 
module.exports = [  
    check('name')
        .notEmpty().withMessage('El campo es obligatorio'),
    check('email')
        .notEmpty().withMessage('El campo es obligatorio').isEmail().withMessage('Tiene que ser un email'),
    check('age')
        .notEmpty().withMessage('El campo es obligatorio').isInt().withMessage('Tienen que ser numeros'),
    check('color')
        .notEmpty().withMessage('El campo es obligatorio')
    ]

