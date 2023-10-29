
const { spec ,request } = require('pactum');
const baseUrl ="https://reqres.in"


describe('GET LIST USERS ', () => {
    before(async () => {
        request.setDefaultTimeout(10000);
    });
    
it('Get lista user', async () => {
     await spec ()
    .get(baseUrl +"/api/users?page=2")
    //.expectHeader('content-type', 'application/json')
    .expectStatus(200)

});

});