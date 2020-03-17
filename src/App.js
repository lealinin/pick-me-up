import React, { Component } from 'react';
// import axios from 'axios';
import RandomQuote from './RandomQuote';

class App extends Component {

  render() {
    console.log('render method runs')
    return(
      <div>
        <RandomQuote />
      </div>
    );
  }
}

export default App;
