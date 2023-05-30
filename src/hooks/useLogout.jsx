import { publicFetch } from '@/utilities/fetchFunction'
import { notifySuccess } from '@/utilities/notifier'
import { useMutation } from '@tanstack/react-query'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'

const useLogout = () => {
  const router = useRouter()
  const logoutMutate = useMutation(
    () => {
      return publicFetch.request({
        url: 'logout',
        method: 'POST',
      })
    },
    {
      onSuccess: () => {
        notifySuccess('Logout Successful')
        router.push('/')
        Cookies.remove('Role')
      },
    }
  )
  return { logoutMutate }
}

export default useLogout
