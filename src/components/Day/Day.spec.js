/* eslint-disable testing-library/no-unnecessary-act */
import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'

import Day from './Day.js'

let container = null
beforeEach(() => {
  container = document.createElement('div')
  document.body.appendChild(container)
  jest.useFakeTimers()
})

afterEach(() => {
  unmountComponentAtNode(container)
  container.remove()
  container = null
  jest.useRealTimers()
})

it('marks the current date', () => {
  jest.setSystemTime(new Date(2020, 6, 10))
  act(() => {
    render(<Day day={10} month={6} year={2020} />, container)
  })
  expect(container.querySelector('div').id).toBe('current-day')
})

it('marks the class name', () => {
  jest.setSystemTime(new Date(2020, 6, 10))
  act(() => {
    render(<Day day={11} month={6} year={2020} />, container)
  })
  expect(container.querySelector('div').className).toBe('cell')
  expect(container.querySelector('div').id).toBe('')
})