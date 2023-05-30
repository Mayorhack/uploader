import { notifyError } from './notifier'

export const errorResponse = function (error) {
  if (error.response?.status === 403 || error.response?.data?.desc === 'E18') {
    notifyError('Token expired!, Logging you out')
    window.sessionStorage.clear()
    // setTimeout(() => window.location.reload(true), 5000)
  } else if (error.response?.status === 400) {
    notifyError('Token expired!, Logging you out')

    // setTimeout(() => window.location.reload(true), 5000)
  } else if (error.response?.status === 401) {
    console.log(error)

    notifyError(error.message)
  } else if (error.response?.status === 500) {
    notifyError('Internal Server Error')
  } else if (error.response?.data?.desc) {
    notifyError(error.response.data?.desc)
  } else if (error.response?.data?.error) {
    notifyError(error.response.data?.error)
  } else if (error.message === 'Network Error') {
    notifyError(error.message)
  } else if (TypeError) {
    return
  } else {
    notifyError(error.message)
  }
}
