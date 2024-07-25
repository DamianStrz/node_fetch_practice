// http://numbersapi.com/random/year?json

// import fetch from 'node-fetch';

const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

/**
Jak ustalić, co wpisaliśmy w consoli node i to pobrać.
Wpisaną wartością będzie rok, który wykorzsytany zostanie do zbudowania api w NumbersAPI.

 */

const year = process.argv[2] || Math.floor(Math.random() * 2020);

console.log(year);

fetch(`http://numbersapi.com/${year}/year?json`)
    .then(response => {
        console.log(response.status);
        console.log(response.ok);
        return response.json();
    })
    .then(data => console.log(data.text))
    .catch(error => console.log('Error:', error))