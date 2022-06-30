import { Link } from "react-router-dom";

const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

export default function Title(props) {

  const month = props.month
  const year = props.year

  const previousMonth = month === 0 ? 11 : month - 1
  const previousYear = previousMonth === 11 ? year - 1 : year

  const nextMonth = month === 11 ? 0 : month + 1
  const nextYear = nextMonth === 0 ? year + 1 : year

  return (
    <div id='title-wrapper'>
      <Link className='button' to={`/${previousYear}/${previousMonth}`}>&lt;</Link>
      <h1>{MONTH_NAMES[month]} {year}</h1>
      <Link className='button' to={`/${nextYear}/${nextMonth}`}>&gt;</Link>
    </div>
  )
}