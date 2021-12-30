const { engine } = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');
const flash = require('connect-flash');
const session = require('express-session');

module.exports = (app, express) => {
    app.use(session({
        secret: process.env.SESSION_SECRET,
        cookie: { maxAge: 60000 }
    }));
    app.use(flash());
    app.engine('handlebars', engine());
    app.set('view engine', 'handlebars');
    app.set('views', path.join(__dirname, '../views'));
    app.use(express.static(path.join(__dirname, '../../public')));
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
}
