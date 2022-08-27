const expect = require('chai').expect;

it('Should add numbers correctly', function() {
    const num1 = 2;
    const num2 = 3;
    expect(num1 + num2).to.equal(5);
})

it('Should not give a result of 6', function() {
    const num1 = 2;
    const num2 = 3;
    expect(num1 + num2).to.not.equal(6);
})