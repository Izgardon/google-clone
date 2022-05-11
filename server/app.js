const express = require('express');
const cors = require('cors')
const app = express();
const data = require('./data');
const listEndpoints = require('express-list-endpoints')

app.use(express.json()) 
app.use(cors()) 

//TODO: Get all Enpoints
app.get('/', (req, res) => { 
    res.json(listEndpoints(app)); 
  })

  app.get('/search', (req, res) => { 
    res.json(data); 
  })

 

  //Retrieve random search
  app.get('/search/random', (req, res) => { 
  
    res.json(getRandomSearch(data));
   
  })


  //Random helper function
  function getRandomSearch (arr) {
  
  let random = Math.floor(Math.random() * arr.length);
  return arr[random]
}


module.exports = app;
