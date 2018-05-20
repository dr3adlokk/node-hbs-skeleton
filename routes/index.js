var express = require('express');
var router = express.Router();
// router.set('view engine', '.hbs')
router.get('/', (req, res, next) => {
    res.render('index', {
        showTitle: true,
        helpers: {
            foo: function() {
                return 'foo.';
            }
        }
    });
})

router.get('/about', (req, res, next) => {
    res.render('about', {
        showTitle: true,
        helpers: {
            foo: function() {
                return 'foo.';
            }
        }
    });
})
router.get('/portfolio', (req, res, next) => {
    res.render('portfolio', {
        showTitle: true,
        helpers: {
            foo: function() {
                return 'foo.';
            }
        }
    });
})
router.get('/contact', (req, res, next) => {
    res.render('contact', {
        showTitle: true,
        helpers: {
            foo: function() {
                return 'foo.';
            }
        }
    });
})
module.exports = router