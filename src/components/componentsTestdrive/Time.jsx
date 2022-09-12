import { useState } from "react";
import React from "react";
import './time.css'



function Times(props) {
  const [event, setEvent] = useState(null)
  const [info, setInfo] = useState(false)


  function displayInfo(e) {
    setInfo(true)
    setEvent(e.target.innerText)
  }

  return (
    <div className="times">
      <div>{props.showTime ? <Times date={props.date} /> : null}</div>
      <div className="times-list">
      {props.times && props.times.map((time , index) => {
        return (
            <button onClick={(e) => displayInfo(e)}> {time} </button>
        )
      })}
      </div>
      <div className="appointment">
        {info
          ? `Your appointment is set to ${event} ${props.date.toDateString()}`+' Complete your testdrive registration with filling the form below'
          : null}
      </div>
    </div>
  )
}

export default Times;
