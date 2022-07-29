import { useParams } from 'react-router-dom'
import { useState } from 'react'
import './DayView.css'

export default function DayView() {

  const params = useParams()
  const day = String(parseInt(params.day)).padStart(2, '0')
  const month = String(parseInt(params.month) + 1).padStart(2, '0')
  const year = params.year

  const date = new Date()
  const currentHour = String(date.getHours()).padStart(2, '0')
  const currentMinutes = String(date.getMinutes()).padStart(2, '0')

  const [reminderDateTime, setReminderDateTime] = useState(`${year}-${month}-${day}T${currentHour}:${currentMinutes}`)
  const [reminderTitle, setReminderTitle] = useState('')
  const [reminders, setReminders] = useState([])

  function handleDateTimeChange(event) {
    setReminderDateTime(event.target.value);
  }

  function handleAddClick(event) {
    event.preventDefault()
    const reminder = {
      title: reminderTitle,
      dateTime: new Date(reminderDateTime)
    }
    setReminders([reminder, ...reminders]
      .sort((r1, r2) => r1.dateTime.getTime() - r2.dateTime.getTime()))
    setReminderTitle('')
  }

  return (
    <div id='day-view'>
      <h1 id='day-view-title'>Add Reminder</h1>
      <form id='reminder-container'>
        <input id='reminder-title' className='reminder-element' type='text' placeholder='Add title' onChange={(e) => setReminderTitle(e.target.value)} value={reminderTitle}></input>
        <label id='reminder-label' htmlFor='reminder-time'>Date and Time</label>
        <input type='datetime-local' id='reminder-time' className='reminder-element' value={reminderDateTime} onChange={handleDateTimeChange}></input>
        <input id='add-button' className='reminder-element' type='submit' value='Add' onClick={handleAddClick} />
        <div id='reminder-container'>
          {reminders.map((reminder, index) => {
            return (
              <div key={index}>{reminder.title} {reminder.dateTime.toLocaleString('de-DE')}</div>
            )
          })}
        </div>
      </form >
    </div >
  )

}