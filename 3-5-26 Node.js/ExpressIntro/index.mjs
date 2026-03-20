import express from 'express'
import fetch from 'node-fetch'

const quotes = (await import("success-motivational-quotes")).default;

const app = express()

app.get('/', async (req, res) => {
    let quote = quotes.getTodaysQuote();
    let url = "https://pixabay.com/api/?key=20426927-497d14db9c234faf7d0df8317&q=flowers&per_page=50&orientation=horizontal"
    let response = await fetch(url);
    let data = await response.json();
    let randomIndex = Math.floor(Math.random() * 50);
    let image = data.hits[randomIndex].webformatURL;
    console.log(quote);
    res.render('home.ejs', {quote, image});
})

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
})
