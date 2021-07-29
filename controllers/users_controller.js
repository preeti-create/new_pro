const User = require('../models/user');

module.exports.profile = function(req, res){
    return res.render('user_profile', {
        title : "User Profile"
    });
}

// render the sign up page
module.exports.signUp = function(req, res){
    return res.render('user_sign_up', {
        title : "Codial | Sign Up"
    })
}

// render the sign in page
module.exports.signIn = function(req, res) {
    return res.render('user_sign_in', {
        title: "Codial | Sign In"
    })
};

module.exports.create = function(req, res)
{
    if(req.body.password != req.body.confirm_passwword){
      res.redirect('back');
    }
    User.findOne({email: req.body.email}, function(err, user){
    if(err){
        console.log('error in finding user in signing up', {err});
        return ;
    }

    if(!user){
     User.create(req.body, function(err, user){
        if(err){
            console.log('error in finding user in signing up', {err});
            return ;
        }
        res.redirect('/users/sign-in');
     });

    }else{
        res.redirect('back');
    }
    });
    // todo later
}

module.exports.createSession = function(req, res)
{
    // todo later
}

