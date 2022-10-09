import Joi from "joi";


let postValidator = Joi.object({
    userId: Joi.number().min(1).max(10).required().messages({
        'string.pattern.base': 'Min 1-max 10'
    }),
    title: Joi.string().required(),
    body: Joi.string().required()
})

export {postValidator};