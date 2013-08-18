var bcrypt = require('bcrypt');

var SessionController = {

    login: function(req, res) {

        // Get password and username from request
        var username = req.param('username');
        var password = req.param('password');

        // No username/password entered
        if(!(username && password)) {
            return res.send('No username or password specified!', 500);
        }
        // Lookup the user in the database
        User.findOne({
            username: username
        }).exec(function (err, user) {

            // Account not found
            if (err || !user) {
                return res.send('Invalid username ', 500);
            }

            // Compare the passwords
            bcrypt.compare(password, user.password, function(err, valid) {
                if(err || !valid)
                    return res.send('Invalid password combination!', 500)

                // The user has authenticated successfully, set their session
                req.session.authenticated = true;
                req.session.User = user;

                // Redirect to protected area
                return res.redirect('/dashboard');
            });
        });
    },
    
     logout: function(req, res) {

        
                req.session.authenticated = false;
                //req.session.User = Null; currently the user variable is not reset

                // Redirect to homepage
                return res.redirect('/');
            },


    register: function(req, res){
        var username = req.param('username');
        var password = req.param('password');
        var confirm = req.param('password-confirm');

        // Make sure user has filled out the form correctly
        if (!username || !password || !confirm || password !== confirm) {
            return res.send('Please fill in all required fields', 500);
        }

        // Hash the password
        bcrypt.genSalt(10, function(err, salt) {
            if (err) return res.send('An error occured', 500);
            bcrypt.hash(password, salt, function(err, hash) {
                if (err) return res.send('An error occured', 500);

                // Save user to the database
                User.create({
                   username: username,
                   password: hash
                }).exec(function(err, user){
                    if (err) return res.send('An error occured', 500);

                    // TODO: add email verification process
                    req.session.authenticated = true;
                    req.session.User = user;

                    // Redirect to protected area
                    return res.redirect('/');
                })

            });
        });
    }
};
module.exports = SessionController;
