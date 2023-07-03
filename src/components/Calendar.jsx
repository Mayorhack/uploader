import {
  Calendar as BigCalendar,
  dayjsLocalizer,
  Views,
} from 'react-big-calendar'
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import timezone from 'dayjs/plugin/timezone'
import dayjs from 'dayjs'
import { useCallback, useEffect, useState } from 'react'
dayjs.extend(timezone)
const djLocalizer = dayjsLocalizer(dayjs)
const DragAndDropCalendar = withDragAndDrop(BigCalendar)

// const events = [
//   {
//     id: 0,
//     title: 'Board meeting',
//     start: new Date(2018, 0, 29, 9, 0, 0),
//     end: new Date(2018, 0, 29, 13, 0, 0),
//   },
//   {
//     id: 1,
//     title: 'MS training',
//     allDay: true,
//     start: new Date(2018, 0, 29, 14, 0, 0),
//     end: new Date(2018, 0, 29, 16, 30, 0),
//   },
//   {
//     id: 2,
//     title: 'Team lead meeting',
//     start: new Date(2018, 0, 29, 8, 30, 0),
//     end: new Date(2018, 0, 29, 12, 30, 0),
//   },
//   {
//     id: 11,
//     title: 'Birthday Party',
//     start: new Date(2018, 0, 30, 7, 0, 0),
//     end: new Date(2018, 0, 30, 10, 30, 0),
//   },
//   {
//     id: 12,
//     title: 'Birthday Party',
//     start: new Date(2018, 0, 31, 7, 0, 0),
//     end: new Date(2018, 0, 31, 10, 30, 0),
//   },
// ]

const styles = {
  container: {
    width: '80wh',
    height: '60vh',
    margin: '2em',
  },
}

export default function CustomCalendar({ event }) {
  const [myEvents, setMyEvents] = useState([])
  useEffect(() => {
    setMyEvents(event)
  }, [event])

  const moveEvent = useCallback(
    ({ event, start, end, isAllDay: droppedOnAllDaySlot = false }) => {
      const { allDay } = event
      if (!allDay && droppedOnAllDaySlot) {
        event.allDay = true
      }

      setMyEvents((prev) => {
        const existing = prev.find((ev) => ev.id === event.id) ?? {}
        const filtered = prev.filter((ev) => ev.id !== event.id)
        return [...filtered, { ...existing, start, end, allDay }]
      })
    },
    [setMyEvents]
  )
  const resizeEvent = useCallback(
    ({ event, start, end }) => {
      setMyEvents((prev) => {
        const existing = prev.find((ev) => ev.id === event.id) ?? {}
        const filtered = prev.filter((ev) => ev.id !== event.id)
        return [...filtered, { ...existing, start, end }]
      })
    },
    [setMyEvents]
  )
  return (
    <div style={styles.container}>
      <DragAndDropCalendar
        selectable
        localizer={djLocalizer}
        events={myEvents}
        defaultView={Views.MONTH}
        views={[Views.DAY, Views.WEEK, Views.MONTH]}
        steps={60}
        defaultDate={new Date()}
        onEventDrop={moveEvent}
        onEventResize={resizeEvent}
      />
    </div>
  )
}
