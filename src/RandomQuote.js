import React, { Component } from 'react';

class RandomQuote extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quote: '',
      author: ''
    }
  }

  render() {
    return (
      <div id="wrapper">
        <h1 className='title'>Pick-Me-Up App</h1>
      </div>
    )
  }
}

export default RandomQuote