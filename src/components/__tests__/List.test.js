import React from 'react'
import ReactDOM from 'react-dom'
import List from '../List/List'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<List />, div)
  ReactDOM.unmountComponentAtNode(div)
})
