const app = require("./app")
const request = require ('supertest'); //install jest and supertest

describe ('api server endpoints',()=>{
    let api;
    beforeAll(()=>{
        api = app.listen(5000,()=>{
                console.log("Test server running on port 5000")
        })
    })

    test('it responds to get / with status 200',(done)=>{
        request(api)
        .get('/')
        .expect(200,done);
    })

    test('it responds to get /search with status 200',(done)=>{
        request(api).get('/search')
        .expect(200,done);
    })

    test('it responds to get /search/random with status 200',(done)=>{
        request(api).get('/search/random')
        .expect(200,done);
    })

    afterAll((done)=>{
        console.log('stop test server')
        api.close(done);
    })
})
