const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes =  require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);





app.use(errorController.get404);

app.listen(3000);

// "dependencies": {
//     "body-parser": "^1.18.3",
//     "ejs": "^2.6.1",
//     "express": "^4.16.3",
//     "express-handlebars": "^3.0.0",
//     "pug