import { Controller, HttpRequest } from "../../../presentation/protocols";
import { Request, Response } from 'express'

export const adaptRoute = (controller: Controller) => {
    return async (req: Request, res: Response) => {
        const httpRquest: HttpRequest = {
            body: req.body
        }
       const httpResponse = await controller.handle(httpRquest)
       res.status(httpResponse.statusCode).json(httpResponse.body)
    }
}