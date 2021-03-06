import './Day.css'

function isCurrentDay(day, month, year) {
  const currentDate = new Date()
  return (
    day === currentDate.getDate()
    && month === currentDate.getMonth()
    && year === currentDate.getFullYear()
  )
}

function getFirstDayInMonth(year, month) {
  const firstDay = new Date(year, month).getDay()
  return firstDay === 0 ? 7 : firstDay
}

export default function Day(props) {

  const { day, month, year } = props
  const id = isCurrentDay(day, month, year) ? 'current-day' : undefined

  const firstWeekDayInMonth = getFirstDayInMonth(year, month)

  const style = day === 1 ? { gridColumnStart: firstWeekDayInMonth } : {}

  return (
    <div id={id} className='cell' style={style}>{day}</div>
  )
}