import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./calend.css"
import Time from "./Time.jsx";



function Pick() {
  const [date, setDate] = useState(new Date());
  const [showTime, setShowTime] = useState(false);
  const [times, setTimes] = useState([])

  const changeTimes = () =>{
    const times_arr = [
      "12:00",
      "13:00",
      "14:00",
    ]
    
    setTimes(times_arr)
  }

  return (
    <div>
      <div className="calendar">
        <h1 className="header">Choose A Date For Your Test Drive</h1>
        <div className="calendar-container">
          <Calendar
            onChange={setDate}
            value={date}
            onClickDay={() => { changeTimes(); setShowTime(true) } }
          />
        </div>
        <div className="text-center">Selected date: {date.toDateString()}</div>
      </div>
      {date.length > 0 ? (
        <p>
          <span>Start:</span>
          {date[0].toDateString()}
          &nbsp; &nbsp;
          <span>End:</span>
          {date[1].toDateString()}
        </p>
      ) : (
        <p>
          <span>Default selected date:</span>
          {date.toDateString()}
        </p>
      )}
        <Time showTime={showTime} date={date} times={times}/>
    </div>
  );
}

export default Pick;
