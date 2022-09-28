import "./Day.css";
import { Link } from "react-router-dom";

function isCurrentDay(day, month, year) {
  const currentDate = new Date();
  return (
    day === currentDate.getDate() &&
    month === currentDate.getMonth() &&
    year === currentDate.getFullYear()
  );
}

function getFirstDayInMonth(year, month) {
  const firstDay = new Date(year, month).getDay();
  return firstDay === 0 ? 7 : firstDay;
}

export default function Day(props) {
  const { day, month, year } = props;
  const id = isCurrentDay(day, month, year) ? "current-day" : undefined;

  const firstWeekDayInMonth = getFirstDayInMonth(year, month);

  const style = day === 1 ? { gridColumnStart: firstWeekDayInMonth } : {};

  const keyDay = String(day).padStart(2, "0");
  const keyMonth = String(month + 1).padStart(2, "0");
  const key = `reminder${year}-${keyMonth}-${keyDay}`;
  const reminders = JSON.parse(localStorage.getItem(key));
  const hasReminders = reminders && reminders.length;
  const classNames = `cell ${hasReminders ? "hasReminder" : ""}`;

  return (
    <Link
      id={id}
      className={classNames}
      style={style}
      to={`/react-calendar/${year}/${month}/${day}`}
    >
      {day}
    </Link>
  );
}
