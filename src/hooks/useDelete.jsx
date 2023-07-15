import { useMutation } from '@tanstack/react-query'
import { publicFetch } from '@/utilities/fetchFunction'
import { successAlert } from '@/utilities/sweetAlert'
const useDelete = (url, succesMessage, action) => {
  const deleteMutation = useMutation(
    () =>
      publicFetch.request({
        method: 'delete',
        url: url,
      }),
    {
      onSuccess: () => {
        successAlert(`${succesMessage} deleted successfully`)
        action()
      },
    }
  )
  return deleteMutation
}

export default useDelete
