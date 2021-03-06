import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from './App'
import reportWebVitals from './reportWebVitals'
import Calendar from './components/Calendar/Calendar'


const root = ReactDOM.createRoot(
  document.getElementById('root'))
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route path=':year/:month' element={<Calendar />} />
        <Route path='/' element={<Calendar />} />
      </Route>
    </Routes>
  </BrowserRouter>
)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
