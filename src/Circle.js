import React, {Component} from 'react'

export default class Circle extends Component{
  render () {
    return (
      <div style={{
        background: `linear-gradient(white ${this.props.gradient}%, tomato ${this.props.gradient}%)`,
        height: '400px',
        width: '400px',
        borderRadius: '50%',
        border: '2px solid red'
      }} onClick={() => this.props.onClickHandler()}>

        <div style={{
          position: 'relative',
          top: '50%',
          textAlign: 'center'
        }}>

          <h2>{this.props.session}</h2>
        </div>

      </div>
    )
  }

}
