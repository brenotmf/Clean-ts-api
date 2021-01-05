import { HttpRequest, HttpResponse } from './http'
export interface Controller {
  handle: (htttpRequest: HttpRequest) => Promise<HttpResponse>
}
