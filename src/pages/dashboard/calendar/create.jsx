import Button from '@/components/Button'
import FormInput from '@/components/forms/FormInput'

import Card from '@/components/Card'

import useCreateCalendar from '@/hooks/useCreateCalendar'
import MyDatePicker from '@/components/forms/MyDatePicker'

// import Image from 'next/image'
const Create = () => {
  const {
    handleChange,
    calendarDetails,
    handleDateChange,
    handleSubmit,
    loading,
  } = useCreateCalendar()
  return (
    <>
      <Card className=" p-8 mt-8 max-w-md mx-auto">
        <h3 className="mb-3 text-highlight">Create Calendar Event</h3>
        <form action="" className="w-full space-y-6 ">
          <FormInput
            label={'Summary'}
            name="summary"
            onChange={handleChange}
            value={calendarDetails.summary}
          />
          <FormInput
            label={'Description'}
            name="description"
            onChange={handleChange}
            value={calendarDetails.description}
          />
          <FormInput
            label={'Email'}
            name="AttendeeEmail"
            onChange={handleChange}
            value={calendarDetails.AttendeeEmail}
          />
          <MyDatePicker
            onChange={(date) => handleDateChange(date, 'startDateTime')}
            placeholderText={'Start Date and Time'}
            value={calendarDetails.startDateTime}
            showTimeSelect
            dateFormat="MMMM d, yyyy h:mm aa"
          />
          <MyDatePicker
            onChange={(date) => handleDateChange(date, 'endDateTime')}
            placeholderText={'End Date and Time'}
            showTimeSelect
            value={calendarDetails.endDateTime}
            dateFormat="MMMM d, yyyy h:mm aa"
          />

          <Button onClick={handleSubmit} loading={loading} className={'w-full'}>
            Create
          </Button>
        </form>
      </Card>
    </>
  )
}

export default Create
