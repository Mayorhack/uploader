import Button from '@/components/Button'
import DragAndDrop from '@/components/Calendar'
import Card from '@/components/Card'
import MyDatePicker from '@/components/forms/MyDatePicker'
import { publicFetch } from '@/utilities/fetchFunction'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Reminder = () => {
  const router = useRouter()
  const { data } = useQuery(
    ['events'],
    () =>
      publicFetch.request({
        method: 'get',
        url: 'Dashboard/Calendar/ListEvents?EventMaxTimeRange=2024-04-30T11:50&EventMinTimeRange=2023-04-20T11:50',
      }),
    {
      onSuccess: (res) => {
        if (!res.data?.items) {
          router.push(res.data)
        }
      },
    }
  )

  const eventList = data?.data.items.map((item, i) => {
    return {
      id: i,
      title: item.summary,
      start: new Date(item.start.dateTime),
      end: new Date(item.end.dateTime),
    }
  })

  return (
    <div>
      <Card className={'my-4'}>
        <h3>Filter</h3>
        <div className="flex justify-between my-4">
          <div className="flex gap-4">
            <div className="">
              <p>Start Date</p>
              <MyDatePicker />
            </div>
            <div className="">
              <p>End Date</p>
              <MyDatePicker />
            </div>
          </div>
          <Link href={'/dashboard/calendar/create'}>
            <Button>Create Event</Button>
          </Link>
        </div>
      </Card>
      <DragAndDrop event={eventList} />
    </div>
  )
}

export default Reminder
