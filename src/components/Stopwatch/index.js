// Write your code here
import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {timeInSeconds: 0}

  renderMinutes = () => {
    const {timeInSeconds} = this.state
    const minutes = Math.floor(timeInSeconds / 60)
    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  renderSeconds = () => {
    const {timeInSeconds} = this.state
    const seconds = Math.floor(timeInSeconds % 60)
    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  onStartButton = () => {
    this.timerId = setInterval(this.clock, 1000)
  }

  clock = () => {
    this.setState(prevState => ({timeInSeconds: prevState.timeInSeconds + 1}))
  }

  onStopButton = () => {
    clearInterval(this.timerId)
  }

  onResetButton = () => {
    this.setState({timeInSeconds: 0})
    clearInterval(this.timerId)
  }

  render() {
    const time = `${this.renderMinutes()}:${this.renderSeconds()}`

    return (
      <div className="bg-container">
        <h1>Stopwatch</h1>
        <div>
          <div className="timer-div">
            <img
              className="icon"
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
            />
            <p>Timer</p>
          </div>

          <h1>{time}</h1>

          <div>
            <button onClick={this.onStartButton} className="a" type="button">
              Start
            </button>
            <button onClick={this.onStopButton} className="b" type="button">
              Stop
            </button>
            <button onClick={this.onResetButton} className="c" type="button">
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
