
var signupController = function (User) {
    var saveUser = function (req, res) {
        var body = req.body;
        var user = new User(body);

        if (!req.body.name) {
            res.status(400);
            res.send('Name is required');
        } else {
            user.save();
            res.status(201);
            res.send(user);
        }
    }

    return {
        saveUser: saveUser
    }
};

module.exports = signupController;
