import React, { Component } from 'react'

class Button extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        count: 0
      }
    }
    countInc = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    countDec = () => {
        this.setState({
            count: this.state.count - 1
        })
    }


  render() {
    const {count} = this.state;
    return (
      <div>
        <h2>Add to cart: {count}</h2>
        <button className="btn btn-primary" onClick={this.countInc}>+</button>
        <button className="btn btn-danger" onClick={this.countDec}>-</button>
      </div>
    )
  }


}


export default Button;