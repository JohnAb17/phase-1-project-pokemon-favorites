console.log("index.js is working!")

fetch("http://localhost:3000/pokemon").then(response => response.json()).then(json => console.log(json))