const { spec ,request } = require('pactum');

const baseUrl ="https://reqres.in"


describe('Delete List ', () => {
    before(async() => {
        request.setDefaultTimeout(10000);
    });
    
it('Delete list', async () => {
  
    const postId=2;
     await spec ()
    .delete(baseUrl +"/api/users/2" + postId)
    .expectStatus(204)

});

});