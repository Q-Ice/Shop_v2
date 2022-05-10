var connection = require('../models/product.models')

// module.exports.checkRegister = function (req, res, next) {
//     const username = req.body.username
// 	const account = req.body.account
// 	const password = req.body.password
//     var errors = []
//     if (!username) {
//         errors.push('Không có tên người dùng')
//     }

//     if (!account) {
//         errors.push('Chưa nhập tài khoản')
//     }

//     if (!password) {
//         errors.push('Chưa nhập password')
//     }

//     if (errors.length != 0) {
//         res.render('/', {
//             values: errors
//         })
//     } 
//     next()
// }

module.exports.checkLogin = function (req, res, next) {
    if (req.cookies.user) {
        var sql = `SELECT * FROM users WHERE userId = '${req.cookies.user}'`
        connection.query(sql, function (err, result) {
            res.locals.userId = req.cookies.user
            res.locals.userName = result[0].userName
        })
    }
    next()
}