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
    endDateTime: new Date(),
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
        dayjs(calendarDetails.endDateTime.toISOString()).format(
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
        setCalendarDetails({
          summary: '',
          location: '',
          description: '',
          startDateTime: new Date(),
          endDateTime: new Date(),
          AttendeeEmail: '',
          popopReminder: '',
        })
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
  const handleDateChange = (date, name) =>
    setCalendarDetails((prev) => {
      return { ...prev, [name]: date }
    })
  const handleSubmit = function (e) {
    e.preventDefault()
    calendarMutate.mutate()
  }
  const loading = calendarMutate.isLoading
  return {
    calendarDetails,
    handleChange,
    handleDateChange,
    handleSubmit,
    loading,
  }
}

export default useCreateCalendar
