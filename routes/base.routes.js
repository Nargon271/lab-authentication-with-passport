const express = require('express')
const router = express.Router()


//midleware usuario logeado
const ensureAuthenticated = (req, res, next) => req.isAuthenticated() ? next() : res.render('auth/login', { errorMsg: 'Desautorizado, inicia sesión' })


// Endpoints
router.get('/', (req, res) => res.render('index'))
router.get('/private-page', ensureAuthenticated, (req, res) => res.render('auth/private', { user: req.user }))


//private Pages



module.exports = router
