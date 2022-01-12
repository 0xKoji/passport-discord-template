const express = require('express')
const session = require('express-session')
const passport = require('passport')
const cors = require('cors')
const PORT = 5000

const discordStrategy = require('./strategies/discordStrategy')
const authRoute = require('./routes/auth')

const app = express()
app.use(cors({
    origin: ['http://localhost:3000'],
    credentials: true
}))

passport.serializeUser(function(user, done){
    done(null, user)
})

passport.deserializeUser(function(obj, done){
    done(null, obj)
})

app.use(session({
    secret: 'Keyboard Cat',
    cookie: {
        maxAge: 60000 * 60 * 24
    },
    saveUninitialized: false,
    resave: false
}))

app.use(passport.initialize())
app.use(passport.session())

app.get('/', function(req, res) {
    res.json({'msg': 'Discord Auth Template', '/auth': 'Login', '/auth/callback': 'Redirect to react frontend', '/auth/logout': 'Logout user', '/info': 'Shows info about the user' })
})

app.use('/auth', authRoute)

app.get('/info', checkAuth, function(req, res){
    res.json(req.user)
})

function checkAuth(req, res, next){
    if(req.isAuthenticated()) return next()
    res.status(401).send({msg: 'Unauthorized'})
}

app.listen(PORT, function(err){
    if(err) return console.log(err)
    console.log(`Server online on ${PORT}`)
})
