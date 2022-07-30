import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './DayView.css'

const DATE_FORMAT_OPTS = {
  dateStyle: 'short',
  timeStyle: 'short'
}

const dateTimeReviver = (key, value) => key === 'dateTime' ? new Date(value) : value

export default function DayView() {

  const params = useParams()
  const day = String(parseInt(params.day)).padStart(2, '0')
  const month = String(parseInt(params.month) + 1).padStart(2, '0')
  const year = params.year

  const date = new Date()
  const currentHour = String(date.getHours()).padStart(2, '0')
  const currentMinutes = String(date.getMinutes()).padStart(2, '0')
  const key = `reminder${year}-${month}-${day}`

  const [reminderTime, setReminderTime] = useState(`${currentHour}:${currentMinutes}`)
  const [reminderTitle, setReminderTitle] = useState('')
  const [reminders, setReminders] = useState([])
  const [error, setError] = useState(false)

  function handleTimeChange(event) {
    setReminderTime(event.target.value);
  }

  function handleAddClick(event) {
    event.preventDefault()
    if (reminderTitle) {
      setError(false)
      const reminder = {
        title: reminderTitle,
        dateTime: new Date(`${year}-${month}-${day}T${reminderTime}`)
      }
      setReminders([reminder, ...reminders]
        .sort((r1, r2) => r1.dateTime.getTime() - r2.dateTime.getTime()))
      setReminderTitle('')
    } else {
      setError(true)
    }
  }

  useEffect(() => {
    const reminders = JSON.parse(localStorage.getItem(key), dateTimeReviver)
    if (reminders) {
      setReminders(reminders)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(reminders))
  }, [reminders])

  return (
    <div id='day-view'>
      <h1 id='day-view-title'>Add Reminder</h1>
      <h2>for {`${day}.${month}.${year}`}</h2>
      <form id='reminder-container'>
        <input
          id='reminder-title'
          className={`reminder-element ${error ? 'error' : ''}`}
          type='text'
          placeholder='Add title'
          onChange={(e) => setReminderTitle(e.target.value)}
          value={reminderTitle}></input>
        <label id='reminder-label' htmlFor='reminder-time'>Time</label>
        <input
          type='time'
          id='reminder-time'
          className='reminder-element'
          value={reminderTime}
          onChange={handleTimeChange}></input>
        <input
          id='add-button'
          className='reminder-element'
          type='submit'
          value='Add'
          onClick={handleAddClick} />
        <div>
          {reminders.map((reminder, index) => {
            return (
              <div className='reminder' key={index}>
                <span className='reminder-time'>{reminder.dateTime.toLocaleString('de-DE', DATE_FORMAT_OPTS)}</span>
                <span className='reminder-text'> {reminder.title}</span>
              </div>
            )
          })}
        </div>
      </form >
    </div >
  )

}