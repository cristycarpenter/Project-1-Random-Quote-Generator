// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//An array storing a few quotes to pull to a web page.
//Dummy quotes for now. I add real quotes later.
var quotes = [
  {
    quote: "My quote",
    source: "The source of my quote.",
    citation: "A citation from my quote.",
    year: "The year the quote was created."
  },
  {
    quote: "My quote2",
    source: "The source of my quote2.",
    citation: "A citation from my quote2.",
  },
  {
    quote: "My quote3",
    source: "The source of my quote3.",
    citation: "A citation from my quote3.",
    year: "The year the quote was created3."
  },
  {
    quote: "My quote4",
    source: "The source of my quote4."
  }
];

//Calculates random index number that pulls one random quote from the array.
function getRandomQuote(){
  return quotes[Math.floor(Math.random() * quotes.length)];
}

//Prints new quote to page when user clicks "Show another quote" button.
function printQuote(){
  var quoteGenerated = getRandomQuote();
  var quoteToDisplay = '<p class="quote">' + quoteGenerated.quote + '</p>';
  quoteToDisplay += '<p class="source">' + quoteGenerated.source;
  if(quoteGenerated.hasOwnProperty('citation') === true){
    quoteToDisplay += '<span class="citation">' + quoteGenerated.citation + '</span>';
  }
  if(quoteGenerated.hasOwnProperty('year') === true){
    quoteToDisplay += '<span class="year">' + quoteGenerated.year + '</span></p>';
  }
  document.getElementById('quote-box').innerHTML = quoteToDisplay;
}
