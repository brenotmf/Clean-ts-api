import { MissingParamError } from '../erros/missing-param-error'

import { HttpResponse } from '../protocols/http'
export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error
})
