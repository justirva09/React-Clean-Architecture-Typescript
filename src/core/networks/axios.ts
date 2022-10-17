import axios, { Method, AxiosRequestConfig, AxiosPromise, ResponseType } from 'axios'

export type ApiRequestProperties = {
  path: string
  params?: object
  url?: string
  method: Method
  headers?: object
  timeout?: number
  bodyRequest?: object
  token?: string
  responseType?: ResponseType
}

const BASE_URL = process.env.BASE_URL_API
export const apiInstance = axios.create({
  baseURL: process.env.BASE_URL_API,
  timeout: 10_000,
  validateStatus: status => status >= 200 && status < 400
})

export const apiRequest = (arguments_: ApiRequestProperties): AxiosPromise => {
  const { method, bodyRequest, params, path, url, timeout, headers, responseType } = arguments_
  const baseUrl = url || BASE_URL || ''
  const token = '' // get your token here
  const config: AxiosRequestConfig = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    url: `${baseUrl}${path}`,
    method
  }

  if (headers) {
    config.headers = { ...config.headers, ...headers }
  }

  if (bodyRequest) {
    config.data = bodyRequest
  }

  if (params) {
    config.params = params
  }

  if (timeout) {
    config.timeout = timeout
  }

  if (responseType) {
    config.responseType = responseType
  }

  return apiInstance(config)
}
