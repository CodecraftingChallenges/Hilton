import React from 'react'
import ReactDOM from 'react-dom'
import DynamicForm from '../../views/DynamicForm/DynamicForm'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<DynamicForm />, div)
  ReactDOM.unmountComponentAtNode(div)
})
