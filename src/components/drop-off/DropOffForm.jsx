import React, { forwardRef, useState } from "react";
import "../pick-up/pickUpForm.css";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";

const DropOffForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [value, onChange] = useState("10:00");

  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button className="example-custom-input" onClick={onClick} ref={ref}>
      {value}
      <i className="arrow down"></i>
    </button>
  ));

  return (
    <div className="dropOff__form">
      <div className="form__title">
        <span></span>
        <h3>Drop - Off</h3>
      </div>

      <div className="form__inputs">
        <div className="input__location">
          <label htmlFor="loc-select">Locations</label>

          <select name="loc" id="loc-select">
            <option value="london">London</option>
            <option value="oxford">Oxford</option>
            <option value="cambridge">Cambridge</option>
            <option value="brighton">Brighton</option>
            <option value="bristol">Bristol</option>
            <option value="manchester">Manchester</option>
          </select>
        </div>

        <div className="input__date">
          <label htmlFor="date-select">Date</label>

          <DatePicker
            selected={startDate}
            closeOnScroll={true}
            dateFormat="yyyy/MM/dd"
            onChange={(date) => setStartDate(date)}
            customInput={<ExampleCustomInput />}
          />
        </div>

        <div className="input__time">
          <label htmlFor="time-select">Time</label>

          <TimePicker
            className="time-input"
            format="h:m"
            clearIcon={null}
            closeClock={false}
            disableClock={true}
            amPmAriaLabel="none"
            onChange={onChange}
            value={value}
          />
        </div>
      </div>
    </div>
  );
};

export default DropOffForm;
