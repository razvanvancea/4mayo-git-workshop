const { spec ,request } = require('pactum');

const baseUrl ="https://reqres.in"


describe('Put LIST USERS ', () => {
    before(async() => {
        request.setDefaultTimeout(10000);
    });
    
it('Put lista user', async () => {
    const requestBody ={
        "name": "morpheus",
        "job": "zion resident"
        
    }
    const postId=2;
     await spec ()
    .put(baseUrl +"/api/users/2" + postId)
    .withBody(requestBody)
    //.expectHeader('content-type', 'application/json')
    .expectStatus(200)

});

});