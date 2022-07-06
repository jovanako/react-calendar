import React from "react"
import { render, unmountComponentAtNode } from "react-dom"
import { act } from "react-dom/test-utils"

import Day from './Day.js'

let container = null
beforeEach(() => {
  container = document.createElement("div")
  document.body.appendChild(container)
})

afterEach(() => {
  unmountComponentAtNode(container)
  container.remove()
  container = null
})

it("marks the current date", () => {
  act(() => {
    const currentDate = new Date()
    render(<Day day={currentDate.getDate()} month={currentDate.getMonth()} year={currentDate.getFullYear()} />, container)
  })
  expect(container.querySelector('div').id).toBe('current-day')
})