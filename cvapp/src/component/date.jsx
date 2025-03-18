// import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaRegCalendarAlt } from "react-icons/fa";
import "./child.css"
const CustomDatePicker = ({Title,startDate,onDateChange}) => {
//   const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="date-picker-container">
      <DatePicker
        selected={startDate}
        onChange={(date) => onDateChange(Title,date)}
        dateFormat="dd / MM / yyyy"
        showPopperArrow={false}
        className="custom-input"
        calendarClassName="custom-calendar"
      />
      <FaRegCalendarAlt className="calendar-icon" />
    </div>
  );
};

export default CustomDatePicker;
