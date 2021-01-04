import { HttpResponse, HttpRequest } from '../protocols/http'
import { MissingParamError } from '../erros/missing-param-error'
import { badRequest } from '../helpers/http-helper'

export class SignUpcontroller {
  handle (htttpRequest: HttpRequest): HttpResponse {
    const requiredFields = ['name', 'email', 'password']
    for (const field of requiredFields) {
      if (!htttpRequest.body[field]) {
        return badRequest(new MissingParamError(field))
      }
    }
  }
}
