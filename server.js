//GLOBAL VARIABLES AND DECLARATIONS
var express         = require('express'),
    server          = express(),
    bodyParser      = require('body-parser'),
    ejs             = require('ejs'),
    methodOverride  = require('method-override'),
    mongoose        = require('mongoose'),
    morgan          = require('morgan'),
    session         = require('express-session'),
    expressLayouts  = require('express-ejs-layouts');

//This sets it to the porcess PORT. If it's defined on Heroku, otherwise it will go to 3000
var PORT = process.env.PORT || 3000;

    //SET
server.set('views', './views');
server.set('view engine', 'ejs');

//USE
//need more explanation for resave and saveUnitialized
server.use(session( {
    secret: 'Company',
    resave: true,
    saveUnitialized: false
}));

server.use(bodyParser.urlencoded({
    extended: true
}));

server.use(express.static('./public'));
server.use(methodOverride('_method'));
server.use(morgan('short'));
server.use(expressLayouts);

//ROUTES + CONTROLLERS

var articleController = require('./controllers/articles.js');
server.use('/articles', articleController);

var userController = require('./controllers/users.js');
server.use('/users', userController);

server.get('/', function(req, res) {
    res.render('welcome');
})


//CATCH ALL ROUTES
server.use(function(req, res) {
    res.send("You lost?");
});

//DATABASE + server
mongoose.connect('mongodb://localhost:27017/Company');
var db = mongoose.connection;
db.on('error', function() {
    console.log('Database errors!');
});

db.once('open', function() {
    console.log('Database up and running!');
    server.listen(3000, function() {
        console.log('Server up and running');
    })
})


























