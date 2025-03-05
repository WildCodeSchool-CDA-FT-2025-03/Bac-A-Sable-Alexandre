import {Response, Request, NextFunction} from "express";
import Joi from "joi";

const schema = Joi.object(
    {
        createdAt: Joi.string()
            .pattern(new RegExp('^[0-9\-:A-Z]{20}$'))
            .required(),
        description: Joi.string()
            .allow(''),
        isPrivate: Joi.boolean(),
        languages: Joi.array().items(
            Joi.object({
                size: Joi.number()
                    .required(),
                node: Joi.object({
                    name : Joi.string()
                    .required(),
                })
            })
        ),
        url: Joi.string()
    }
);

const validateData = (req: Request, res: Response, next: NextFunction) =>{
    const { error } = schema.validate(req.body);
    if(error){
        res.status(422).json(error);
    }
    else
    {
        next();
    }
};

export { validateData };