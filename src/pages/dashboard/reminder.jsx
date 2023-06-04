import DragAndDrop from '@/components/Calendar'
import { publicFetch } from '@/utilities/fetchFunction'
import { useQuery } from '@tanstack/react-query'

const Reminder = () => {
  const { data } = useQuery(['events'], () =>
    publicFetch.request({
      method: 'get',
      url: 'Dashboard/Calendar/ListEvents?EventMaxTimeRange=2023-04-30T11:50&EventMinTimeRange=2023-04-20T11:50',
    })
  )
  console.log(data)

  return (
    <div>
      <DragAndDrop />
    </div>
  )
}

export default Reminder
