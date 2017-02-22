'use strict';
var should = require('should'),
    request = require('supertest'),
    app = require('./../../../app'),
    mongoose = require('mongoose'),
    User = mongoose.model('userdata'),
    agent = request.agent(app);


describe('Signup user test', function () {

    describe('/api/signup', function () {

        var testUser = { name: 'Chirag', age: 31, sex: 'Male', country: 'United Kingdom' };

        it('should create user', function (done) {
            agent.post('/api/signup')
                .send(testUser)
                .expect(400)
                .end(function (err, user) {
                    user.body.should.have.property('_id');
                    done();
            });
        });

        afterEach(function (done) {
            User.remove().exec();
            done();
        })
    });
});
