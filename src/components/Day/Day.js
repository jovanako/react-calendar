function isCurrentDay(day, month, year) {
  const currentDate = new Date()
  return (
    day === currentDate.getDate()
    && month === currentDate.getMonth()
    && year === currentDate.getFullYear()
  )
}

export default function Day(props) {

  const { day, month, year } = props
  const id = isCurrentDay(day, month, year) ? 'current-day' : undefined

  let firstWeekDayInMonth = new Date(year, month).getDay()
  firstWeekDayInMonth = firstWeekDayInMonth === 0 ? 7 : firstWeekDayInMonth

  const style = day === 1 ? { gridColumnStart: firstWeekDayInMonth } : {}

  return (
    <div id={id} className='cell' style={style}>{day}</div>
  )
}