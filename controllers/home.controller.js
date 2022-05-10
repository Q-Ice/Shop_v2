var connection = require('../models/product.models')
const { nanoid } = require('nanoid')

module.exports.show = function (req, res) {
	var type = req.params.type || 'A'
	var page = req.query.page || 1
	var perPage = 8
	var start = (page - 1) * perPage
	var end = page * 8
	var sql = `SELECT * FROM products WHERE type = '${type}'`
	connection.query(sql, function (err, result) {
		res.render('shop/home', {
			products: result.slice(start, end),
		})
	})
}

module.exports.addCart = function (req, res) {
	var id = req.params.id
	var sql = `UPDATE products SET sold = 'true' WHERE productId = ${id}`
	connection.query(sql, function (err, result) { })
	res.redirect('/')
}

module.exports.success = function (req, res) {
	var sql = `UPDATE products SET sold = 'false' WHERE sold = 'true'`
	connection.query(sql, function (err, result) { res.redirect('/') })
}

module.exports.register = function (req, res) {
	const userId = nanoid(10)
	const username = req.body.username
	const account = req.body.account
	const password = req.body.password
	var sql = `INSERT INTO users (userId, userName, userAccount, userPassword) VALUES ('${userId}','${username}', '${account}', '${password}')`
	connection.query(sql, function (err, result) { })
	res.cookie('user', userId)
	res.redirect('/')
}

module.exports.login = function (req, res) {
	const account = req.body.account
	const password = req.body.password
	var sql = `SELECT * FROM users WHERE userAccount = '${account}' AND userPassword = '${password}'`
	connection.query(sql, function (err, result) {
		if (result.length) {
			res.cookie('user', result[0].userId)
			res.redirect('/')
		} else {
			res.send('wrong pass and account')
		}
	})
}


module.exports.logout = function (req, res) {
	res.clearCookie('user')
	res.redirect('back')
}
