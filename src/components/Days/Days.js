import './Days.css'

const WEEKDAY_NAMES = [
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat',
  'Sun'
]

function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate()
}

function isCurrentDay(day, month, year) {
  const currentDate = new Date()
  return (
    day === currentDate.getDate()
    && month === currentDate.getMonth()
    && year === currentDate.getFullYear()
  )
}

export default function Days(props) {

  const { month, year } = props
  const daysInMonth = getDaysInMonth(year, month)
  let firstWeekDayInMonth = new Date(year, month).getDay()
  firstWeekDayInMonth = firstWeekDayInMonth === 0 ? 7 : firstWeekDayInMonth


  return (
    <>
      <div id='week-days'>
        {WEEKDAY_NAMES.map(weekday => <div className='cell'>{weekday}</div>)}
      </div>
      <div id='dates-wrapper'>
        {[...Array(daysInMonth)].map((_, i) =>
          <div key={i}
            id={isCurrentDay(i + 1, month, year) ? "current-day" : undefined}
            className='cell'
            style={i === 0 ? { gridColumnStart: firstWeekDayInMonth } : {}}
          >{i + 1}</div>)}
      </div>
    </>
  )
}