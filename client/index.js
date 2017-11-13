import React from 'react'
import { render } from 'react-dom'
import moment from 'moment'

const Welcome = props => <h1>Hi, the current time is {props.time}</h1>
const currentTime = () =>
  render(
    <Welcome time={moment().format('h:mm:ssa')} />,
    document.querySelector('#app')
  )

setInterval(Welcome, 16)
setInterval(currentTime, 16)
