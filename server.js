const express = require('express');
const path = require("path");

const app = express();
const flash = require('connect-flash');

// routes ================================
require('./app/routes.js')(app);

app.use(flash());
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.listen(process.env.PORT || 5000);
console.log("Server running at localhost:5000");
