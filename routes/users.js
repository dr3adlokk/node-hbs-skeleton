var express = require('express');
var app = express()
app.get('/', (req, res, next) => {
    res.render('index', {
        showTitle: true,
        helpers: {
            foo: function() {
                return 'foo.';
            }
        }
    });
})

app.get('/about', (req, res, next) => {
    res.render('about', {
        showTitle: true,
        helpers: {
            foo: function() {
                return 'foo.';
            }
        }
    });
})
app.get('/portfolio', (req, res, next) => {
    res.render('portfolio', {
        showTitle: true,
        helpers: {
            foo: function() {
                return 'foo.';
            }
        }
    });
})
app.get('/contact', (req, res, next) => {
    res.render('contact', {
        showTitle: true,
        helpers: {
            foo: function() {
                return 'foo.';
            }
        }
    });
})
module.exports = app