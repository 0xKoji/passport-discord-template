const router = require('express').Router()
const passport = require('passport')
const cors = require('cors')

router.use(cors())

router.get('/', passport.authenticate('discord'))

router.get('/callback', passport.authenticate('discord', {failureRedirect: 'http://localhost:3000'}), function(req, res) {
    res.redirect('http://localhost:3000/info')
})

router.get('/logout', function(req, res){
    req.logout()
    res.redirect('http://localhost:3000')
})

module.exports = router