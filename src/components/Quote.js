import { useState } from 'react'

const QUOTES_API = "https://asli-fun-fact-api.herokuapp.com/"


function Quote() {

  const [quoteText, setQuoteText] = useState('...')
  const [error, setError] = useState(false)

  const handleError = error => {
    setError(true)
    console.log(error)
  }

  fetch(QUOTES_API)
    .then(response => response.json())
    .then(json => setQuoteText(json.data.fact.toUpperCase()))
    .catch(handleError)

  return (
    <div id='quote-wrapper'>
      {!error &&
        <>
          <p>Did you know?</p>
          <p>{quoteText}</p>
        </>}
    </div>
  )
}

export default Quote