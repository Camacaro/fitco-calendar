import {Request, Response} from "express";

export const notFoundMiddleware = (req: Request, res: Response) => {
    res.status(404).json({msg: 'Not found'})
}

export const errorHandler = (err: Error, req: Request, res: Response) => {
    console.log(err)
    res.status(500).json({msg: 'Internal server error', err})
}
