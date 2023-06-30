import DragAndDrop from '@/components/Calendar'
import { publicFetch } from '@/utilities/fetchFunction'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'

const Reminder = () => {
  const router = useRouter()
  const { data } = useQuery(
    ['events'],
    () =>
      publicFetch.request({
        method: 'get',
        url: 'Dashboard/Calendar/ListEvents?EventMaxTimeRange=2023-04-30T11:50&EventMinTimeRange=2023-04-20T11:50',
      }),
    {
      onSuccess: (res) => router.push(res.data),
    }
  )

  console.log(data)

  return (
    <div>
      <DragAndDrop />
    </div>
  )
}

export default Reminder
