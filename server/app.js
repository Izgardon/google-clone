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

  //TODO:Search 
  app.get('/search/:id', (req, res) => { 
    

    try{
        const moviesID = parseInt(req.params.id)
      
        const movie = movies[moviesID - 1]; 
       
        
        if(!movie){ 
                throw new Error('This movie does not exist')
        }
        else{
             res.send(movie);  
        }
    }


        catch(err){
            res.status(404).send({message:err.message})
        }
  })

  //Retrieve random search
  app.get('/search/random', (req, res) => { 
  
    res.json(getRandomQuote(quotes));
   
  })


  //Random helper function
  function getRandomQuote (arr) {
  
  let random = Math.floor(Math.random() * arr.length);
  return quotes[random]
}


module.exports = app;
