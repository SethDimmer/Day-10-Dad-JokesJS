//  API -- APPLICATION PROGRAMMING INTERFACE

// JSON API JSON DATA

// JAVASCRIPT OBJECT
// using fetch api

// when i call fetch to a URL it returns a promise because it fetches the data ASYNCHRNOUSLY

// .then when i finish fetching the api

// the first .then is for the response then i say i want the JSON data

// 2ND .then gives me the actual data so i console log the data that i a m getting from the fetch


const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click',generateJoke)
// when i click on jokeBtn i want to call the generateJoke function

generateJoke()

// function generateJoke() {
//     const config = {
//         headers: {
//             'Accept': 'application/json'
//         }
//     }
//     fetch('https://icanhazdadjoke.com', config)
//     .then(res => res.json())
//     .then((data) => {
//         jokeEl.innerHTML = data.joke
//     })
// }


// ASYNC AWAIT METHOD


async function generateJoke() {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    }
    // since fetch is async i have to AWAIT until it is done fetching
    // at this point i get the response but still need to call res.json()
   const res = await fetch('https://icanhazdadjoke.com', config)
//    whenever i use await inside a function i have to label the function async
// any PROMISES that i want to put into a variable i put the await before it 

const data = await  res.json() //since this returns a promise i have to await it

jokeEl.innerHTML = data.joke





}



