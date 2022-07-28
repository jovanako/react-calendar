import { useParams } from 'react-router-dom'
import { useState } from 'react'
import './DayView.css'

export default function DayView() {

  const params = useParams()
  const day = params.day
  const month = String(parseInt(params.month) + 1).padStart(2, '0')
  const year = params.year

  const date = new Date()
  const currentHour = String(date.getHours()).padStart(2, '0')
  const currentMinutes = String(date.getMinutes()).padStart(2, '0')

  const [inputValue, setInputValue] = useState(`${year}-${month}-${day}T${currentHour}:${currentMinutes}`)

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  return (
    <div id='day-view'>
      <h1 id='day-view-title'>Add Reminder</h1>
      <form id='reminder-container'>
        <input id='reminder-title' class="reminder-element" type='text' placeholder='Add title'></input>
        <label id='reminder-label' htmlFor='reminder-time'>Date and Time</label>
        <input type='datetime-local' id='reminder-time' class="reminder-element" value={inputValue} onChange={handleInputChange}></input>
        <input id='add-button' class="reminder-element" type="submit" value="Add" />
      </form>
    </div >
  )

}