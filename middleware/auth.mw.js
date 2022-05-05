module.exports.checkRegister = function (req, res, next) {
    const username = req.body.username
	const account = req.body.account
	const password = req.body.password
    var errors = []
    if (!username) {
        errors.push('Không có tên người dùng')
    }

    if (!account) {
        errors.push('Chưa nhập tài khoản')
    }

    if (!password) {
        errors.push('Chưa nhập password')
    }

    if (errors.length != 0) {
        res.render('/', {
            values: errors
        })
    } 
    next()
}