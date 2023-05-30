import React from 'react'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'

const MyDatePicker = ({ onChange, value, name }) => {
  return (
    <DatePicker
      dateFormat={'dd/MM/yyyy'}
      selected={value}
      onChange={onChange}
      className="border-[1px] border-slate-300 rounded-lg w-full p-2 outline-highlight hover:border-slate-800 bg-transparent z-100"
      placeholderText="Click to select date"
      name={name}
    />
  )
}
export default MyDatePicker
