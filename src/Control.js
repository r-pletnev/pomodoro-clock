import React, {Component} from 'react'

export default class Cotrol extends Component{
  render() {
    return(
      <div>
        <button onClick={() => this.props.onDecrement()}>-</button>
        <span>{this.props.timer}</span>
        <button onClick={() => this.props.onIncrement()}>+</button>
      </div>
    )
  }
}
