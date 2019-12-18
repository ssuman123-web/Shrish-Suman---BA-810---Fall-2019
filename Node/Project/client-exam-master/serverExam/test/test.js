//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index.js');
let should = chai.should();
var mongoose = require("mongoose"),
    Gadget = require('../app/models/gadgets');


chai.use(chaiHttp);

describe('Gadget', () => {
    beforeEach((done) => {
        User.remove({}, (err) => {
            done();
        });
    });
   
    it('it should GET all the users', (done) => {
        // User.remove({}, (err) => { });
        var gadget = new User({
            "Yoo": "Yoo",
            "Hoo": 5
        });
        gadget.save((err, gadget) => {
            chai.request(server)
                .get('/api/gadgets')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(1);
                    done();
                });

        });
    });

    it('it should DELETE a user given the id', (done) => {
        var gadget = new User({
            "Yoo": "Yoo",
            "Hoo": 5
        });
        gadget.save((err, gadget) => {
            chai.request(server)
                .delete('/api/gadgets/' + gadget.id)
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
    });

});





