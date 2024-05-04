const { spec } = require('pactum');

describe ("POST test suite", () =>{
    it ("GET posts test", async () =>{
       await spec()
       .get("https://jsonplaceholder.typicode.com/posts")
       .expectStatus(200);
    });
});