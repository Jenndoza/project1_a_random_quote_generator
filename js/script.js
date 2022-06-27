/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array abc 
***/

let quotes = 
[
{
  quote: "There is no such thing as easy, easy does not exist.",
  source: 'Anonymous',
},
{
  quote: "Life is like a box of chocolates, you never know what you're going to get.",
  source: 'Forrest',
  citation: 'Forrest Gump',
},
{
  quote: "I wanna be remembered as someone who broke all the norms.",
  source: 'Karol G',
},
{
  quote: "It always seems impossible until it's done.",
  source: 'Nelson Mandela',
  year: '2001',
},
{
  quote: "If you can make it through the night, there's a brighter day.",
  source: 'Tupac Shakur',
}
];

console.log(quotes)

/***
 * `getRandomQuote` function
***/

function getRandomQuote(){
  const randomNumber = Math.floor(Math.random()*quotes.length);
  return quotes [randomNumber];
}

getRandomQuote();
//console.log(getRandomQuote)

/***
 * `printQuote` function
***/

function printQuote(){
  let randomQuote = getRandomQuote();

  let html= `<p class="quote" > ${randomQuote.quote} </p>
              <p class="source"> ${randomQuote.source} `

  if (randomQuote.citation) {
    html+=`<span class="citation" > ${randomQuote.citation} </span>`
  };
  
  if (randomQuote.year) {
    html +=`<span class="year" > ${randomQuote.year} </span>`
  };

  html+= `</p>`;

  document.getElementById("quote-box").innerHTML = html;
  
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);