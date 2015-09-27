// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'      : 'your-secret-clientID-here', // your App ID
        'clientSecret'  : 'your-client-secret-here', // your App Secret
        'callbackURL'   : 'http://localhost:8080/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'       : 'your-consumer-key-here',
        'consumerSecret'    : 'your-client-secret-here',
        'callbackURL'       : 'http://localhost:8080/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'      : '334719300394-5ul6o23ob7ok0vm2qea77qjdjpn03an7.apps.googleusercontent.com',
        'clientSecret'  : 'ZyA4JPJCiRhM13_mfRPIQmHO',
        'callbackURL'   : 'http://localhost:8080/auth/google/callback'
    }

};