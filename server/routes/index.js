const express = require('express')
const router  = express.Router()

const userRoutes = require('./userRoutes.js')
const filmRoutes = require('./filmRoutes.js')

router.get('/', function(req, res, next) {
    res.status(200).json({
        message: 'You are connected to the server, refer to API documentation for further information'
    })
})

router.use('/user', userRoutes)
router.use('/film', filmRoutes)

module.exports = router