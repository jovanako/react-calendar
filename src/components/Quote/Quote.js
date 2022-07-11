import React, { useState, useEffect } from 'react'
import './Quote.css'

const QUOTES_API = 'https://uselessfacts.jsph.pl/random.json?language=en'


function Quote() {

  const [quoteText, setQuoteText] = useState('...')
  const [error, setError] = useState(false)

  const handleError = error => {
    setError(true)
    console.log(error)
  }

  useEffect(() => {
    (async function () {
      try {
        const response = await fetch(QUOTES_API)
        const json = await response.json()
        setQuoteText(json.text)
      } catch {
        handleError()
      }
    })()
  }, [])

  // useEffect(() => {
  //   fetch(QUOTES_API)
  //     .then(response => response.json())
  //     .then(json => setQuoteText(json.text))
  //     .catch(handleError)
  // }, [])

  return (
    <div id='quote-wrapper'>
      {!error &&
        <>
          <p>Did you know?</p>
          <p id='quote-text'>{quoteText}</p>
        </>}
    </div>
  )
}

export default Quote