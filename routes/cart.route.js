const express = require('express')
const router = express.Router()
const controller = require('../controllers/cart.controller')


router.get('/', controller.show)
router.get('/delete/:id', controller.delete)

module.exports = router
