import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./calend.css"
import Time from "./Time.jsx";
import {useDispatch, useSelector} from "react-redux"
import { color} from "../../redux/InfoSlice"



function Pick() {
  const [date, setDate] = useState(new Date());
  const [showTime, setShowTime] = useState(false);
  const [times, setTimes] = useState([])

  const changeTimes = () =>{
    const times_arr = [
      "10:00",
      "11:00",
      "12:00",
      "13:00",
      "14:00",
      "15:00",
      "16:00"
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
     
        <Time showTime={showTime} date={date} times={times}/>
    </div>
  );
}

export default Pick;
