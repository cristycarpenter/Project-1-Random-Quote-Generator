// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//Starts timer to print quote every 30 seconds.
var timer = setInterval(printQuote, 30000);

//Will hold already displayed quotes.
var quotesDisplayed = [];

//Calculates random index number that pulls one quote from the array.
function getRandomQuote(){
  return quotes[Math.floor(Math.random() * quotes.length)];
}

//Generates random number betwee 0 and 256.
function randomValue(){
  return Math.floor(Math.random() * 256 );
}

//Generates and concats rgb values for changing the page's background color.
function randomBackgroundColor(){
  var color = 'rgb(';
  color += randomValue() + ',';
  color += randomValue() + ',';
  color += randomValue() + ')';
  return color;
}

//Prints quote to page.
function printQuote(){

  //Check if the quotes array is empty. If it is, refill it.
  if(quotes.length === 0){
    quotes = quotesDisplayed.splice(0);
  }

  //Changes background color on click.
  document.body.style.background = randomBackgroundColor();

  //Grabs random quote from quotes array.
  var quoteGenerated = getRandomQuote();

  //Builds the quote out in HTML
  var quoteToDisplay = '<p class="quote">' + quoteGenerated.quote + '</p>';
  quoteToDisplay += '<p class="source">' + quoteGenerated.source;
  if(quoteGenerated.hasOwnProperty('citation') === true){
    quoteToDisplay += '<span class="citation">' + quoteGenerated.citation + '</span>';
  }
  if(quoteGenerated.hasOwnProperty('year') === true){
    quoteToDisplay += '<span class="year">' + quoteGenerated.year + '</span></p>';
  }
  quoteToDisplay += '<p class="tags">' + quoteGenerated.tags + '</p>';

  //Injects the HTML into the web page.
  document.getElementById('quote-box').innerHTML = quoteToDisplay;

  //Logs quote to console for testing/visibility
  console.log(quoteToDisplay);

  //Grabs index of generated quote which is used to splice/remove it.
  var quoteGeneratedIndex = quotes.indexOf(quoteGenerated);

  //Removes quote just displayed to the page from quotes array.
  var removed = quotes.splice(quoteGeneratedIndex, 1);

  //Pushes removed quote to temporary holding array until all quotes have been displayed.
  quotesDisplayed.push(removed[0]);

  //Clear timer if user clicks the button.
  clearTimeout(timer);

  //Timer starts again and will print a new quote in 30 seconds if user does not click button again.
  timer = setInterval(printQuote, 30000);
}
