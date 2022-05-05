const express = require('express')
const router = express.Router()
const controller = require('../controllers/home.controller')
const middleware = require('../middleware/auth.mw')


router.get('/', controller.show)
router.get('/:type', controller.show)
router.get('/add/:id', controller.addCart)

router.post('/', controller.register)

module.exports = router