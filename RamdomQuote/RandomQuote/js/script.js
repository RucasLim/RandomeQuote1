/******************************************
*****************************************/
/*** 
 * `quotes` array  
***/

// black array
var quotesArray = [];
// add property
var property1 = {
    quote: 'Spread love everywhere you go. Let no one ever come to you without leaving happier',
    source:'Mother Teresa',
    citation: 'hubspot',    
    year: '2022'
};
var property2 = {
    quote: 'The Closing of the American Mind.',
    source:'Friends',
    citation: 'The Wizard of Oz',
    year: '2008'    
};
var property3 = {
    quote: 'Example is the school of mankind, and they will learn at no other.',
    source:'Edmund Burke',
    citation: 'Irish - Statesman ' , 
    year: '1797'    
};
var property4 = {
    quote: 'Go ahead, make my day.',
    source:'Sudden Impact',
    citation: 'IMDb'  , 
    year: '1983'      
};
var property5 = {
    quote: "What we've got here is failure to communicate.",
    source:'Cool Hand Luke',
    citation: 'Wikipedia', 
    year: '1967'    
};
//add propery to array
quotesArray.push(property1);
quotesArray.push(property2);
quotesArray.push(property3);
quotesArray.push(property4);
quotesArray.push(property5);


/***
 * `getRandomQuote` function
***/
 // generate random number and use that number to show quote.
function getRandomQuote() {
    var lenghtOfQuoteArray = quotesArray.length;
    var rNumber = Math.floor(Math.random() * lenghtOfQuoteArray);
    return quotesArray[rNumber]; 

}

/***
 * `printQuote` function
***/
// This functuon will generate HTML string and that will be shown in browser page.
function printQuote(){
    var quoteObject = getRandomQuote(); 
    var htmlString = "<p class='quote'>" + quoteObject.quote + "</p>";
    htmlString += "<p class='source'>" + quoteObject.source +" " 
    if(quoteObject.citation){
        htmlString += "<span class='citation'>" + quoteObject.citation +"</span>";
     }
     if(quoteObject.year){
        htmlString += "<span class='year'>" + quoteObject.year +"</span>";
     }

   
    document.getElementById('quote-box').innerHTML = htmlString;
   
   }


/***
 * click event listener for the print quote button
 * The code will look like the following. You need to complete it.

***/
document.getElementById('load-quote').addEventListener("click", function(){
    printQuote();
});

