/* eslint-disable testing-library/no-unnecessary-act */
import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'

import Days from './Days.js'

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

it('renders 31 cells when month has 31 days', () => {
  jest.setSystemTime(new Date(2022, 4, 1))
  act(() => {
    render(<Days month={4} year={2022} />, container)
  })
  expect(container.querySelector('#dates-wrapper div:last-child').textContent).toBe('31')
})

it('renders 30 cells when month has 30 days', () => {
  jest.setSystemTime(new Date(2022, 5, 1))
  act(() => {
    render(<Days month={5} year={2022} />, container)
  })
  expect(container.querySelector('#dates-wrapper div:last-child').textContent).toBe('30')
})

it('renders 28 cells when month is February', () => {
  jest.setSystemTime(new Date(2022, 1, 1))
  act(() => {
    render(<Days month={1} year={2022} />, container)
  })
  expect(container.querySelector('#dates-wrapper div:last-child').textContent).toBe('28')
})

it('renders 29 cells when month is February and it is leap year', () => {
  jest.setSystemTime(new Date(2016, 1, 1))
  act(() => {
    render(<Days month={1} year={2016} />, container)
  })
  expect(container.querySelector('#dates-wrapper div:last-child').textContent).toBe('29')
})