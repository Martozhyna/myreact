import Joi from "joi";


let userValidator = Joi.object ({
    name: Joi.string().required(),
    username: Joi.string().required(),
    phone: Joi.number().required()
})

export {userValidator}