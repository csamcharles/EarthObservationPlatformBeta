//During the test the env variable is set to test
process.env.NODE_ENV = 'test';


//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
var api = require('../app.js');
let should = chai.should();


chai.use(chaiHttp);
//Our parent block

describe('/POST algorithm', () => {
    it('it should send the algorithm', (done) => {
        chai.request(api)
            .post('/api/submit-alg')
            .end((err, res) => {
                res.should.have.status(500);
                done();
            });
    });
});
