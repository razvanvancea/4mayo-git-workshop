describe ("Ath test suite before each", () => {
    beforeEach (() => {
    console.log ("this a ath before each suite");
    })
    before ("Ath test suite before all", ()=>{
        console.log("this is an ath before all suite");
    })
    afterEach("Ath test suite after each", ()=> {
        console.log("this a after ath on each suite");
    })
    after ("Ath test suite after all", ()=>{
        console.log("this a ath on all suite");
    })
    it ("test 1", () => {
        console.log ('test1')
    })
    it ("test 2", () => {
        console.log ('test2')
    })
    it ("test 3", () => {
        console.log ('test3')
    })
})