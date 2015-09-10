var Recipe = require('./models/recipe');

function getRecipes(res){
	Recipe.find(function(err, recipes) {

			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				res.send(err)

			res.json(recipes); // return all recipes in JSON format
		});
};

module.exports = function(app, passport) {

	// api ---------------------------------------------------------------------
	// get all recipes
	app.get('/api/recipe', function(req, res) {

		// use mongoose to get all recipes in the database
		getRecipes(res);
	});

	// create recipe and send back all recipes after creation
	app.post('/api/recipe', function(req, res) {

		// create a recipe, information comes from AJAX request from Angular
		Recipe.create({
			title : req.body.title,
			description : req.body.description
		}, function(err, recipe) {
			if (err)
				res.send(err);

			// get and return all the recipes after you create another
			getRecipes(res);
		});

	});

	// delete a recipe
	app.delete('/api/recipe/:recipe_id', function(req, res) {
		Recipe.remove({
			_id : req.params.recipe_id
		}, function(err, recipe) {
			if (err)
				res.send(err);

			getRecipes(res);
		});
	});

	// =====================================
    // LOGIN ===============================
    // =====================================
    // show the login form
    app.get('/login', function(req, res) {

        // render the page and pass in any flash data if it exists
        res.sendfile('./public/js/login/login.tmpl.html');
    });

     app.get('/signup', function(req, res) {

        // render the page and pass in any flash data if it exists
        res.sendfile('./public/js/login/signup.tmpl.html');
    });

	// process the signup form
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect : '/profile', // redirect to the secure profile section
        failureRedirect : '/signup', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));

    // =====================================
    // LOGOUT ==============================
    // =====================================
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

    // =====================================
    // PROFILE SECTION =====================
    // =====================================
    // we will want this protected so you have to be logged in to visit
    // we will use route middleware to verify this (the isLoggedIn function)
    app.get('/profile', isLoggedIn, function(req, res) {
        res.sendfile('./public/js/profile/profile.tmpl.html');
    });

	// application -------------------------------------------------------------
	app.get('*', function(req, res) {
		console.log('Application Router: Catch all fired. Returning: ./public' + req.originalUrl);
		res.sendfile('./public' + req.originalUrl); // load the single view file (angular will handle the page changes on the front-end)
	});

	// route middleware to make sure a user is logged in
	function isLoggedIn(req, res, next) {

	    // if user is authenticated in the session, carry on
	    if (req.isAuthenticated()) {
	        return next();
	    }

	    // if they aren't redirect them to the home page
	    res.redirect('/');
	}
};