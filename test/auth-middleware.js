const expect = require('chai').expect

const authMiddleware = require('../middleware/isAuth');

it('Should throw an error if no authorization header is present', function() {
    const req = {
        get: function(headerName) {
            return null;
        }
    }
    //Passing a prepared (which functions and args passed in) reference
    // authMiddleware(req, res, next)
    expect(authMiddleware.bind(this, req, {}, () => {})).to.throw('Not Authenticated');
})