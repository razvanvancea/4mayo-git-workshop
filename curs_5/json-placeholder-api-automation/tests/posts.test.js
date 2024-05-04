const { spec, request } = require('pactum');
const baseURL = 'https://jsonplaceholder.typicode.com';

describe ("POST test suite", () =>{
    before( async ()=>{
        request.setDefaultTimeout(10000);
    });

    it ("GET posts test", async () =>{
       await spec()
       .get(`${baseURL}/posts`)
       .expectStatus(200);
    });
    
    it ("create test", async () => {
        const requestBody = {
            "title":"ceva",
            "body":"altceva"
        }
        await spec().post(`${baseURL}/posts`)
        .withBody(`${requestBody}`)
        .expectStatus(201);
    });
});