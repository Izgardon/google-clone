const express = require('express');
const cors = require('cors')
const app = express();
const data = require('./data');

app.use(express.json()) 
app.use(cors()) 

//TODO: Get all Enpoints
app.get('/', (req, res) => { 
    res.send('Welcome to our Search API!'); 
  })

  //TODO:Search 
  app.get('/search/:id', (req, res) => { 
    

    try{
        const moviesID = parseInt(req.params.id)
       // console.log(req.params.id)
        const movie = movies[moviesID - 1]; //plus 1 to because of array indexing
       
        
        if(!movie){ // if cat id doesnt exist,add ettot
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
  app.get('/quotes/random', (req, res) => { 
  
    res.json(getRandomQuote(quotes));
    //res.json(quotes); 
  })


  //Random helper function
  function getRandomQuote (arr) {
  
  let random = Math.floor(Math.random() * arr.length);
  return quotes[random]
}


