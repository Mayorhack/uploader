import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
export const notifyError = (message) => {
  toast.error(message, {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 5000,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  })
}
export const notifySuccess = (message) => {
  toast.success(message, {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 5000,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  })
}
export const notifyInfo = (message, time = 3000) => {
  toast.info(message, {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: time,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  })
}
export const notifyPromise = (message, successMessage, loading = true) => {
  const id = toast.loading(message, {
    position: toast.POSITION.TOP_RIGHT,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  })
  toast.update(id, {
    render: successMessage,
    type: 'success',
    isLoading: loading,
  })
}
