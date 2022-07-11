import { useParams } from "react-router-dom"
import { useState } from "react"

const DayView = () => {
  const [notes, setNotes] = useState({})
  const params = useParams()
  const { year, month, day } = params
  console.log(year, month, day)

  const handleClick = (e) => {
    e.preventDefault()
    const text = document.querySelector('#note-input').value.trim()
    if (text) {
      let nextState = [...notes]
      nextState.push({ text })
      setNotes(nextState)
    }
  }
  console.log(notes)

  const removeNote = (textNote) => {
    let nextState = [...notes]
    // nextState.filter(note => note.text !== textNote.text)
    setNotes((notes) => {
      notes.filter(({ note }) => note !== textNote.text)
    })
  }

  return (
    <div>
      <p>{day}{month}{year}</p>
      <form>
        <input id="note-input" type="text" onChange={(e) => console.log(e.target.value)}></input>
        <button type="submit" onClick={(e) => handleClick(e)}>Submit</button>
      </form>
      <div>
        {notes.map((note, index) => {
          return <div key={index} >
            <p>{note.text}</p>
            <span onClick={() => removeNote(note)}>Delete</span>
          </div>
        })}
      </div>
    </div>
  )
}

export default DayView