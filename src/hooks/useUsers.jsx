import { useQuery } from '@tanstack/react-query'
import { publicFetch } from '@/utilities/fetchFunction'

const useUsers = () => {
  const { data } = useQuery(['users'], () => {
    return publicFetch.request({
      url: 'dashboard/admin/getallusers',
    })
  })

  return { data }
}

export default useUsers
