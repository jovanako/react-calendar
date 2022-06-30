import { Outlet } from 'react-router-dom'
import './App.css'
import Quote from './components/Quote/Quote'

function App() {

  return (
    <>
      <Quote />
      <Outlet />
    </>
  )
}

export default App;
