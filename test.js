process.env.NODE_ENV = 'test';
const mongoose = require("mongoose"),
    //User = require('../app/models/users');
    //Todo = require ('../app/models/todos');
    Gadget = require('../app/models/gadgets');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index.js');
let should = chai.should();

chai.use(chaiHttp);

it('it should GET the index.html file', (done) => {
    chai.request(server)
        .get('/index.html')
        .end((err, res) => {
            res.should.have.status(200);
            res.should.be.html;
            done();
        });
});

it('it should return 404', (done) => {
    chai.request(server).get('/index2.html')
        .end((err, res) => {
            res.should.have.status(404);
            done();
        });
});


/////////////////Gadget test case
describe('Gadget', () => {
    beforeEach((done) => {
        Gadget.remove({}, (err) => {
            done();
        });
    });
    ////////Get all gadgets//
    it('it should GET all the gadgets', (done) => {
        var gadget = new Gadget({
            "Yoo": "Ranjan",
            "Hoo": 11
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
    ////update///
    it('it should UPDATE a gadget', (done) => {

        var gadget = new Gadget({
            "Yoo": "Ranjan",
            "Hoo": 11
        })
        gadget.save((err, gadget) => {
            chai.request(server)
                .put('/api/gadgets/' + gadget._id)
                .send({
                    "_id": gadget._id,
                    "Yoo": "Ranjan",
                    "Hoo": 10,

                })
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('Hoo').eql(10);
                    done();
                });
        });
    });
    ////post////   
    it('it should POST a gadget', (done) => {
        var gadget = {
            "Yoo": "Ranjan",
            "Hoo": 10
        }
        chai.request(server)
            .post('/api/gadgets')
            .send(gadget)
            .end((err, res) => {
                res.should.have.status(201);
                res.body.should.have.property('Yoo');
                res.body.Yoo.should.be.a('string');
                res.body.Yoo.should.equal('Ranjan');
                done();
            });
    });
    // //getbyid
    it('it should GET a gadget by the given id', (done) => {
        var gadget = new Gadget({
            "Yoo": "Ranjan",
            "Hoo": 10,

        });

        gadget.save((err, gadget) => {
            chai.request(server)
                .get('/api/gadgets/' + gadget._id)
                .send(gadget)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('Yoo');

                    res.body.should.have.property('_id').eql(gadget._id.toString());
                    done();
                });
        });

    });
    // //delete
    it('it should DELETE gadget given the id', (done) => {
        var gadget = new Gadget({
            "Yoo": "Ranjan",
            "Hoo": 11,

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