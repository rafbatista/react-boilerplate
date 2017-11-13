import React from 'react'
import { render } from 'react-dom'
import moment from 'moment'

const Clock = props => <h1>Hi, the current time is {props.time}</h1>
const currentTime = () =>
  render(
    <Clock time={moment().format('h:mm:ssa')} />,
    document.querySelector('#app')
  )

setInterval(currentTime, 16)
