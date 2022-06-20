import './App.css';
import Weekday from './components/Weekday';

function App() {
  // array of weekdays
  const weekdays = [
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
    'Sun'
  ]

  return (
    <div className="App">
      <h1>June 2022</h1>
      <div>
        {weekdays.map((weekday, index) => {
          return <Weekday day={weekday} key={index} />
        })}
      </div>
    </div>
  );
}

export default App;
