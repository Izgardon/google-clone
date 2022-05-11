let accessKey = "b66dea11ca6dce22d64c88699e872510";
let query = 'Mcdonalds'; //defined from searchbar 

let url = 'http://api.serpstack.com/search?access_key='+accessKey+"&query="+query

fetch(url)
.then(response =>response.json())
.then(data =>{    
    console.log(data);

    data.organic_results.forEach(element => {
        console.log(element.title);
        console.log(element.snippet);
        console.log(element.url);
        
    });

    data.organic_results
})
