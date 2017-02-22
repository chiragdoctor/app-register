var should = require('should'),
    sinon = require('sinon'),
    _ = require('lodash');

describe('SignUp Controller tests', function () {
    describe('Creating user', function () {
        var User = {},
            req = {},
            res = {},
            signupController;

        beforeEach(function () {
            User = function (user) { this.save = function () {} };

            req = {
                body: { name: 'Chirag', age: 31, sex: 'Male', country: 'United Kingdom' }
            };

            res = {
                send: sinon.spy(),
                status: sinon.spy()
            };

            signupController = require('./../../../controllers/signupController')(User);


        });

        it('should save user if all information is provided', function () {;
            signupController.saveUser(req, res);
            res.status.calledWith(201).should.equal(true);
        });

        it('should not allow empty name on saving user', function () {
            req = {
                body: { age: 31, sex: 'Male', country: 'United Kingdom' }
            };

            signupController.saveUser(req, res);

            res.status.calledWith(400).should.equal(true, 'Bad Status - ' + res.status.args[0][0]);
            res.send.calledWith('Name is required').should.equal(true);
        });
    })
});