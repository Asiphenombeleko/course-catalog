//wite the name of the function
describe("the courseCost function", function(){
    //write what is the function required to do 
it ("should return invalid code if the passed arguement is not a course type ", function (){
   //write an assert statement telling what the function should return 
   let result = courseCost("z2", "yy");
    assert.deepEqual({ status: 'Invalid code' }, result)
})

it ("should return Invalid day if the day is wraped around a number value ", function(){
    let result = courseCost("r1", "yy");
assert.deepEqual({ status: 'Invalid day' }, result)

})
it("should return success when the code is correct  ", function(){
    let result = courseCost("r1", "yy")
})
assert.deepEqual({ status: 'success' }, result)
})