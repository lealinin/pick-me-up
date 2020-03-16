import React, { Component } from 'react';
// import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    console.log('constructor runs')
  }

  componentDidMount() {
    console.log('componentDidMount runs')
  }

  render() {
    console.log('render method runs')
    return(
      <div>
        <h1>Hello</h1>
      </div>
    );
  }
}



export default App;
