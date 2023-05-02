import React from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const MyDatePicker = ({ startDate, onChange }) => {
  return (
    <DatePicker
      selected={startDate}
      onChange={onChange}
      showIcon={true}
      className="border-[1px] border-slate-300 rounded-lg w-full p-2 outline-highlight hover:border-slate-800 bg-transparent z-30"
      placeholderText="Click to select date"
    />
  );
};
export default MyDatePicker;
