// const voice2text = require('./voice2text.js');
// const emotionRecognition = require('../openCV/listen.js');
const fs = require('fs');
const moment = require('moment');

module.exports = (app) => {
    app.get('/', (req, res) => {
        res.render("landing.ejs");
    });

    app.get('/start', (req, res) => {
        res.render('start.ejs');
    })
}