/* eslint-disable testing-library/no-unnecessary-act */
import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import Quote from './Quote'

let container = null
beforeEach(() => {
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  unmountComponentAtNode(container)
  container.remove()
  container = null
})

it('loads quote text', async () => {
  const fakeQuote = {
    text: 'The average talker sprays about 300 microscopic saliva droplets per minute, about 2.5 droplets per word.'
  }
  jest.spyOn(global, 'fetch').mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeQuote)
    })
  )

  await act(async () => {
    render(<Quote />, container)
  })

  expect(container.querySelector('#quote-text').textContent).toBe(fakeQuote.text)
})