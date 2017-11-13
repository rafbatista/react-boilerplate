import React from 'react'
import { render } from 'react-dom'
import moment from 'moment'

render(
  <div>Hi, the current time is {moment().format('h:mma')}</div>,
  document.querySelector('#app')
)
