// Write your code here
import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {
    randomNumber: 0,
  }

  getRandomNumber = () => {
    const Number = Math.ceil(Math.random() * 100)
    this.setState({randomNumber: Number})
  }

  render() {
    const {randomNumber} = this.state

    return (
      <div className="random-number-bg">
        <div className="random-number-container">
          <h1 className="random-number-heading">Random number</h1>
          <p className="random-number-desc">
            Generate a random number in the range of 0 to 100
          </p>
          <button onClick={this.getRandomNumber}>Generate</button>
          <p className="random-number-heading">{randomNumber}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
