
const { spec , request } = require('pactum');
const { faker } = require('@faker-js/faker');
const baseUrl ="https://reqres.in"


describe('POST LIST USERS ', () => {
    before(async () => {
        request.setDefaultTimeout(10000);
   });
    
it('Post lista user', async () => {
    const randomjobTitle = faker.person.jobTitle()
    
    const requestBody ={
        "name": "morpheus",
        "job": randomjobTitle
        }
        console.log('Is'+ randomjobTitle);
     await spec ()
    .post(baseUrl +"/api/users")
    .withBody(requestBody)
    //.expectHeader('content-type', 'application/json')
    .expectStatus(201)
    .expectBodyContains(randomjobTitle)

});

});