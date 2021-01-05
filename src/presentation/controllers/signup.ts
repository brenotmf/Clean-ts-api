import { HttpResponse, HttpRequest, Controller, EmailValidator } from '../protocols'
import { MissingParamError, InvalidParamError } from '../erros'
import { badRequest, serverError } from '../helpers/http-helper'
import { AddAccount } from '../domain/usercases/add-account'

export class SignUpcontroller implements Controller {
  private readonly emailValidator: EmailValidator
  private readonly addAccount: AddAccount

  constructor (emailValidator: EmailValidator, addAccount: AddAccount) {
    this.emailValidator = emailValidator
    this.addAccount = addAccount
  }

  handle (htttpRequest: HttpRequest): HttpResponse {
    try {
      const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']
      for (const field of requiredFields) {
        if (!htttpRequest.body[field]) {
          return badRequest(new MissingParamError(field))
        }
      }
      const { name, email, password, passwordConfirmation } = htttpRequest.body
      if (password !== passwordConfirmation) {
        return badRequest(new InvalidParamError('passwordConfirmation'))
      }
      const isValid = this.emailValidator.isValid(htttpRequest.body.email)
      if (!isValid) {
        return badRequest(new InvalidParamError('email'))
      }
      this.addAccount.add({
        name,
        email,
        password,
        passwordConfirmation
      })
    } catch (error) {
      return serverError()
    }
  }
}
