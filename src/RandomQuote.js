import React, { Component } from 'react';
import quotes from './data/QuotesDatabase';
import QuoteAndAuthor from './QuoteAndAuthor';
// import axios from 'axios';

class RandomQuote extends Component {
  constructor() {
    super();
    this.state = {
      quote: quotes[0].quote,
      author: quotes[0].author,
    };
  }

  randomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }

  shuffleQuotes(array) {
    return array.sort(() => Math.random()-0.5);
  }

  handleClick = () => {
    const generateRandomQuote = this.randomQuote();
    this.setState({
      quote: generateRandomQuote.quote,
      author: generateRandomQuote.author
    });
    this.shuffleQuotes(quotes);
  };

  randomColor() {
    const color = `rgb(
      ${Math.floor(Math.random() * 155)},
      ${Math.floor(Math.random() * 155)},
      ${Math.floor(Math.random() * 155)})`;
    return color;
  }

  render() {
    return(
      <div>
        <QuoteAndAuthor 
          handleClick={this.handleClick}
          {...this.state}
        />
      </div>
    )
  }
}




// class RandomQuote extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       quote: '',
//       author: ''
//     }
//   }

//   componentDidMount() {
//     this.getQuote();
//   }

//   getQuote() {
//     let url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'

//     axios.get(url)
//       .then(res => {
//         let data = res.data.quotes;
//         let quoteIndex = Math.floor(Math.random() * data.length);
//         let randomQuote = data[quoteIndex];

//         this.setState({
//           quote: randomQuote['quote'],
//           author: randomQuote['author']
//         })
//       })
//   }

//   getNewQuote = () => {
//     this.getQuote();
//   }

//   render() {
//     const { quote, author } = this.state;

//     return (
//       <div id="wrapper">
//         <h1 className='title'>Pick-Me-Up App</h1>

//         <div id="quote-box">
//           <div id="text">
//             <p>{quote}</p>
//           </div>
//           <div id="author">
//             <h5>{author}</h5>
//           </div>
//           <div id="buttons">
//             <a id="tweet-quote" href={`https://twitter.com/intent/tweet?text=${quote} ${author}`} title="Post this on Twitter.">
//               <span>
//                 <i className="fab fa-twitter twitter-icon" />
//               </span>
//             </a>
//             <button id="new-quote" className="buttons" onClick={this.getNewQuote}>New Quote</button>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }

export default RandomQuote