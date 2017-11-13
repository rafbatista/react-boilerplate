import React from 'react'
import { render } from 'react-dom'
import moment from 'moment'

const currentTime = () =>
  render(
    <div>Hi, the current time is {moment().format('h:mm:ssa')}</div>,
    document.querySelector('#app')
  )

setInterval(currentTime, 16)
