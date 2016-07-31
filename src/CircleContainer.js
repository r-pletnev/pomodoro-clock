import React, { Component } from 'react'
import Circle from './Circle'
import Control from './Control'
import moment from 'moment'
require('moment-duration-format')

export default class CircleContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      duration: moment.duration(60, 's'), 
      stopTimer: false,
      Timer: 60000
    }
  }

  countdownTimer() {
    let i = setInterval(() => {
      if (this.state.duration.asSeconds() <= 0 || this.state.stopTimer) {
        return clearInterval(i)
      }
      this.setState({
      duration: this.state.duration.subtract(1, 's')
      })
    }, 1000)
  }

  componentDidMount() {
    this.countdownTimer()
  }

  stopTimer(){
    if (this.state.stopTimer){
      this.countdownTimer()
    }
    this.setState({
      stopTimer: !this.state.stopTimer
    })
  }

  incrementTimer(){
    const Timer = this.state.Timer + 60000
    this.setState({
      duration: moment.duration(Timer, 'ms'),
      Timer
    })
  }

  decrementTimer(){
    const Timer = this.state.Timer - 60000
    if (Timer === 0) return
    this.setState({
      duration: moment.duration(Timer, 'ms'),
      Timer
    })
  }

  getGradientPercent(){
    let {duration, Timer} = this.state
    duration = duration.asMilliseconds()
    return Math.floor(Math.round(duration/Timer * 10000)/100)
  }

  render() {
    return (
      <div>
        <Control onIncrement={::this.incrementTimer} onDecrement={::this.decrementTimer} timer={moment.duration(this.state.Timer, 'ms').format('mm:ss')} />
        <Circle gradient={::this.getGradientPercent()}onClickHandler={::this.stopTimer} session={::this.state.duration.format('mm:ss')} />
      </div>
    )
  }
}
