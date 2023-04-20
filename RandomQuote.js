import React from 'react'
import { ReactDOM } from 'react';
import "../src/RandomQuote.css";
import CopyToClipboardButton from './CopyToClipboardButton';
import { BsWhatsapp } from "react-icons/bs";
import { BsSnapchat } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";
const APIURL = "https://type.fit/api/quotes";

function getRandom(maxNum) {
  return Math.floor(Math.random() * maxNum);
}

function RandomQuote() {

  const [allQuotes, setAllQuotes] = React.useState([]);
  const [quotes, setQuotes] = React.useState("");
  const [author, setAuthor] = React.useState("");

 
  const getQuote = () => {
    fetch(APIURL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setAllQuotes(data);
      });
  };

  const generateQuote = () => {
    let range = getRandom(allQuotes.length);
    setQuotes(allQuotes[range].text);
    setAuthor(allQuotes[range].author);
  };

  // Run getQuote on the first render
  React.useEffect(() => {
    getQuote();
  }, []);

  React.useEffect(() => {
    if (allQuotes.length) {
      generateQuote();
    }
  }, [allQuotes]);

  return (
    <section className='container'>
      <h1>Quote Machine Generator</h1>
      <hr></hr>
      <ln></ln>
      <div id="quote-box">
        <div id="text">
          <i className="fa fa-quote-left"></i>
          <span className="text">{quotes}</span>
        </div>
        <div id="author">
          <p>- {author}</p>
        </div>
        <div className="buttons">
            <img id='img' src='https://cdn-icons-png.flaticon.com/512/733/733635.png'/>
          <a
            href={`="${quotes}" ${author}`}
            id="tweet-quote"
            target="_top"
          >
            <i className="fa fa-twitter"></i>
          </a>
          </div>
          </div>
          <div>

          <button
            onClick={() => {
              setTimeout(() => {
                generateQuote();
              }, 500);
             
            }}
            id="new-quote">
            New Quote
          </button>
          <CopyToClipboardButton text={quotes} />

              </div>
              <div className='dropdown'> 
              <button className='dropbtn'>Share</button>
              <div className='dropdown-content'>
                <a href="https://wa.me/+918825998595"> <BsWhatsapp className='icon'/>whatsapp</a>
                <a href="#">  <BsSnapchat className='icon'/>snapchat</a>
                <a href="#">  <BsInstagram className='icon'/>instagram</a>
                <a href="https://t.me/Mr_swag_5"> <BsTelegram className='icon'/> telegram</a>
              </div>
            
              </div>
    </section>

  );
}



export default RandomQuote;