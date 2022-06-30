import { useParams } from "react-router-dom"
import Title from "../Title/Title"
import './Calendar.css'
import Days from "../Days/Days"


export default function Calendar() {

  const date = new Date()
  const currentMonth = date.getMonth()
  const currentYear = date.getFullYear()

  const params = useParams()
  const month = params.month ? parseInt(params.month) : currentMonth
  const year = params.year ? parseInt(params.year) : currentYear

  return (
    <>
      <Title month={month} year={year} />
      <Days month={month} year={year} />
    </>
  )
}
