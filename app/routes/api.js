
var User = require('../models/user'); // Avail user.js model in Server.js file
module.exports = function (router) {
    router.post('/users', function (req, res) {
        var user = new User();
        user.username = req.body.username;
        user.password = req.body.password;
        user.email = req.body.email;
        if (req.body.username == null || req.body.username == "" || req.body.email == "" || req.body.email == null || req.body.password == "" || req.body.password == null) {

            res.json({ success: false, message: 'Ensure username,password and email were provided' })
        } else {
            user.save(function (err) {
                if (err) {
                    res.json({ success: false, message: 'username or emaill already exists in the system!' });

                } else {
                    res.json({ success: true, message: 'User created successfully !' });
                }
            });
        }
    });
    return router;
}