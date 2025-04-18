exports.middlewareGlobal = function (req, res, next) {
    res.locals.errors = req.flash('errors')
    res.locals.success = req.flash('success')
    res.locals.user = req.session.user;
    next()
}

exports.seuOutroMiddleware = function (req, res, next) {
    next()
}

exports.checkCsrfError = (err, req, res, next) => {
    if (err) {
        return res.render('404')
    }
}

exports.csrfMidlleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken()
    next()
}

exports.loginRequired = (req, res, next) => {
    if (!req.session.user) {
        req.flash("errors", "Você precisa fazer login.")
        req.session.save(function () {
            return res.redirect('/')
        })
        return
    }

    next()
}