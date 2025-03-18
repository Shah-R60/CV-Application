// import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaRegCalendarAlt } from "react-icons/fa";
import "./child.css"
const CustomDatePicker = ({index , Title,startDate,onDateChange}) => {
//   const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="date-picker-container">
      <DatePicker
        selected={startDate}
        onChange={(date) => onDateChange(index,Title,date)}
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
