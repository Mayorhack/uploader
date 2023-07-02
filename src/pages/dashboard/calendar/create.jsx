import Button from '@/components/Button'
import FormInput from '@/components/forms/FormInput'

import DatePicker from 'react-datepicker'

import Card from '@/components/Card'

import useCreateCalendar from '@/hooks/useCreateCalendar'

// import Image from 'next/image'
const Create = () => {
  const { handleChange, calendarDetails, handleDateChange, handleSubmit } =
    useCreateCalendar()
  return (
    <>
      <Card className=" p-8 mt-8">
        <form action="" className="flex flex-col md:flex-row items-center">
          <div className="w-full p-5 space-y-6">
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
          </div>
          <div className="w-full full-display grid place-items-center">
            <DatePicker
              selected={calendarDetails.startDateTime}
              onChange={(date) => handleDateChange(date)}
              inline
              showTimeSelect
            />
          </div>
        </form>
        <div className=" flex gap-8 justify-center">
          <Button variant="outlined">Cancel</Button>
          <Button onClick={handleSubmit}>Upload</Button>
        </div>
      </Card>
    </>
  )
}

export default Create
