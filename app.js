
// document.querySelector('#container').innerText = 'hello'

(async () => {
    let response = await fetch('https://api.giphy.com/v1/gifs/search?q=cats&api_key=nPJNlVceWHERWCSDBW5XMo1p90l7l9ie&limit=10')
    let giphys = await response.json()
    console.log(giphys.data);
    let giphy = document.createElement('img')
    giphy.setAttribute('src', giphys.data[0].images.original.url)
    document.querySelector('#container').appendChild(giphy)
})()


if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js');
} 







