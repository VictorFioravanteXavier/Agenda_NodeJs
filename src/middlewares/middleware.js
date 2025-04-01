exports.middlewareGlobal = function(req, res, next) {
    res.locals.umaVariavelLocal = 'Este é o valor da variável local.'
    next()
}

exports.seuOutroMiddleware = function(req, res, next) {    
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