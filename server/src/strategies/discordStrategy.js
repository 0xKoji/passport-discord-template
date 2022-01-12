const passport = require('passport')
const DiscordStrategy = require('passport-discord').Strategy

const scopes = ['identify', 'guilds']

passport.use(new DiscordStrategy({
    clientID: '',
    clientSecret: '',
    callbackURL: 'http://localhost:5000/auth/callback',
    scope: scopes,
}, function(accessToken, refreshToken, profile, done){
    process.nextTick(function(){
        return done(null, profile)
    })
}))