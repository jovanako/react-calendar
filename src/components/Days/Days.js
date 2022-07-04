import './Days.css'
import Day from '../Day/Day'

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

export default function Days(props) {

  const { month, year } = props
  const daysInMonth = getDaysInMonth(year, month)

  return (
    <>
      <div id='week-days'>
        {WEEKDAY_NAMES.map(weekday => <div key={weekday} className='cell'>{weekday}</div>)}
      </div>
      <div id='dates-wrapper'>
        {[...Array(daysInMonth)].map((_, i) =>
          <Day key={i} day={i + 1} month={month} year={year} />
        )}
      </div>
    </>
  )
}