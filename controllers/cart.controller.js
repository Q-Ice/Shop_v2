var connection = require('../models/product.models')

module.exports.show = function (req, res) {
    var sql = `SELECT * FROM products Where sold ='true'`
	connection.query(sql, function(err, result) {
		res.render('shop/cart', {
			products: result
		})
	})
}

module.exports.delete = function (req, res) {
    var id = req.params.id
	var sql = `UPDATE products SET sold = 'false' WHERE productId = ${id}`
	connection.query(sql, function(err, result) {})
    res.redirect('back')
}