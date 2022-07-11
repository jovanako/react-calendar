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

it('does not mark non-current date', () => {
  jest.setSystemTime(new Date(2020, 6, 10))
  act(() => {
    render(<Day day={11} month={6} year={2020} />, container)
  })
  expect(container.querySelector('div').id).not.toBe('current-day')
})

it('positions the first day in month', () => {
  const testDay = new Date(2022, 6, 1)
  jest.setSystemTime(testDay)
  act(() => {
    render(<Day day={1} month={6} year={2022} />, container)
  })
  expect(container.querySelector('div')).toHaveStyle({ gridColumnStart: 5 })
})

it('does not set gridColumnStart for the rest of the days', () => {
  const testDay = new Date(2022, 6, 1)
  jest.setSystemTime(testDay)
  act(() => {
    render(<Day day={2} month={6} year={2022} />, container)
  })
  expect(container.querySelector('div')).not.toHaveStyle({ gridColumnStart: 5 })
})