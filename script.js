//creating variable

const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");



const apiURL = " https://api.quotable.io/random ";

//creating function
async function getQuote() {



        //upadting new quote in quote container
        quoteEl.innerText = "Updating....";
        authorEl.style.display = "none";


        //calling api
        const response = await fetch(apiURL);
        const data = await response.json();

        const quoteContent = data.content;
        const quoteAuthor = data.author;

        authorEl.style.display = "block";

        quoteEl.innerText = quoteContent;
        authorEl.innerText = "~" + " " + quoteAuthor;


        console.log(data);


}

getQuote();

//time to change quote
setInterval(getQuote, 60000);

// for every day quote change
// setInterval(function() {
//     let now = new Date();
//     if (now.getHours() === 0 && now.getMinutes() === 0 && now.getSeconds() === 0) {
//       displayQuote();
//     }
//   }, 1000);