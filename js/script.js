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
    year: "The year the quote was created2."
  },
  {
    quote: "My quote3",
    source: "The source of my quote3.",
    citation: "A citation from my quote3.",
    year: "The year the quote was created3."
  },
  {
    quote: "My quote4",
    source: "The source of my quote4.",
    citation: "A citation from my quote4.",
    year: "The year the quote was created4."
  }
];
