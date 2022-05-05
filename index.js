const express = require('express')
const app = express()
const port = 8080
const route = require('./routes/index.route')
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.set('view engine', 'pug')
app.set('views', './views')

app.use(express.static('public'))

route(app)

app.listen(port, () => {})