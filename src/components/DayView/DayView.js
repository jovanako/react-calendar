import { useParams } from 'react-router-dom'

export default function DayView() {

  const params = useParams()
  const day = params.day
  const month = String(parseInt(params.month) + 1).padStart(2, '0')
  const year = params.year

  const date = new Date()
  const currentHour = String(date.getHours()).padStart(2, '0')
  const currentMinutes = String(date.getMinutes()).padStart(2, '0')

  return (
    <>
      <input type='text' placeholder='Add title'></input>
      <label htmlFor='reminder-time'>Date and Time</label>
      <input type='datetime-local' id='reminder-time' value={`${year}-${month}-${day}T${currentHour}:${currentMinutes}`}></input>
    </>
  )

}