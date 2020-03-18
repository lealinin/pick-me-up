import React, { Component } from 'react';
import './QuoteBox.css';

class QuoteAndAuthor extends Component {
  render() {
    // const randomColor = this.props.displayColor;
    // const randomColor = this.props.displayColor();
    // const html = document.documentElement;
    // html.style.backgroundColor = randomColor;

    return (
      <>
        <div className="QuoteBox">
          <div
            className="fadeIn"
            key={Math.random()}
          // style={{ color: randomColor }}
          >
            <h2 id="quote">{this.props.quote}</h2>
            <h4 id="author">{this.props.author}</h4>
          </div>
        </div>
        <div className="ButtonWrapper">
          <button
            className="QuoteButton"
            // style={{ backgroundColor: randomColor }}
            id="newquote"
            onClick={this.props.handleClick}
          >
            Pick Me Up
      </button>
        </div>
      </>
    );
  }
}

export default QuoteAndAuthor;