import { privateFetch } from '@/utilities/fetchFunction'
import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'
import { successAlert } from '@/utilities/sweetAlert'
import FormData from 'form-data'
import dayjs from 'dayjs'

const useCreateCalendar = () => {
  const [calendarDetails, setCalendarDetails] = useState({
    summary: '',
    location: '',
    description: '',
    startDateTime: new Date(),
    endDateTime: '',
    AttendeeEmail: '',
    popopReminder: '',
  })
  const calendarFormData = new FormData()
  const calendarMutate = useMutation(
    () => {
      calendarFormData.append('Summary', calendarDetails.summary)
      calendarFormData.append('Description', calendarDetails.description)
      calendarFormData.append('AttendeeEmail[0]', calendarDetails.AttendeeEmail)
      calendarFormData.append(
        'StartDateTime',
        dayjs(calendarDetails.startDateTime.toISOString()).format(
          'YYYY-MM-DDTHH:mm'
        )
      )
      calendarFormData.append('Location', 'Lagos')
      calendarFormData.append(
        'EndDateTime',
        dayjs(calendarDetails.startDateTime.toISOString()).format(
          'YYYY-MM-DDTHH:mm'
        )
      )
      calendarFormData.append('EmailReminderTime', '2')
      calendarFormData.append('PopUpReminderTime', '50')
      return privateFetch.request({
        url: '',
        method: 'POST',
        data: calendarFormData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
    },
    {
      onSuccess: () => {
        successAlert('Done')
      },
    }
  )
  const handleChange = function (e) {
    const name = e.target.name
    const value = e.target.value
    setCalendarDetails((prev) => {
      return { ...prev, [name]: value }
    })
  }
  const handleDateChange = (date) =>
    setCalendarDetails((prev) => {
      console.log(date.toISOString())

      return { ...prev, startDateTime: date }
    })
  const handleSubmit = function () {
    calendarMutate.mutate()
  }
  return { calendarDetails, handleChange, handleDateChange, handleSubmit }
}

export default useCreateCalendar
