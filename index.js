
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
let ejs = require("ejs");
app.set("view engine", "ejs");


/* Getting all the db querys */
const {getAllDonut} = require('./models/user');
/* This middle ware checks if the token given by the user is right */
const {authenticate} = require('./middleware/authenticate');

// The code below allows the node js to find the public directory with the index.html file
const publicPath = path.join(__dirname, './public');
// Node js is using port 3000/ and when you push to cloud it will use process.env.PORT
const port = process.env.PORT || 3000;

// Bodyparser for using json data - dont need bodyparser anymore
app.use(express.urlencoded({extended: true}));
app.use(express.json()) // To parse the incoming requests with JSON payloads
app.use(express.static(publicPath));


/* GET index page 
app.get('/', function(req, res, next) {
    res.render('index');
});*/

app.get('/', async (req, res, next) => {
    donuts = await getAllDonut()
    res.render('index', {dTable: donuts});
 });

/* This function saves a user to the db
    It uses promises.

app.post('/createUser',(req,res,next)=>{
    saveUser(req.body).then((result)=>{
        return res.header('x-auth', result.token).send({email : result.email});
    }).catch((e)=>{
        return res.status(400).send(e);
    });
});

app.get('/', async (req, res, next) => {
    donuts = await getAllDonut()
    res.render('index', {dTable: donuts});
 });*/

/* When the user from the front-end wants to use a function,
The below code is an example of using the word authenticate to see if the
user is actually authenticated

app.get('/get/me',authenticate,(req,res,next)=>{
    res.send(req.user);
});*/

app.listen(port, () => {
    console.log(`Server is up on ${port}`);
});




 





/*var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
let ejs = require("ejs");
app.set("view engine", "ejs");





const {getAllDonut} = require('./models/user');

const {authenticate} = require('./middleware/authenticate');

// The code below allows the node js to find the public directory with the index.html file
const publicPath = path.join(__dirname, './public');
// Node js is using port 3000/ and when you push to cloud it will use process.env.PORT
const port = process.env.PORT || 3000;

// Bodyparser for using json data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(publicPath));


app.get('/', async (req, res, next) => {
    donuts = await getAllDonut()
    res.render('index', {dTable: donuts});
 });

 app.post('/createUser',(req,res,next)=>{
    saveUser(req.body).then((result)=>{
        return res.header('x-auth', result.token).send({email : result.email});
    }).catch((e)=>{
        return res.status(400).send(e);
    });
});


//need an async request
app.get('/', async (req, res, next) => {
    donuts = await getAllDonut()
    res.render('index', {dTable: donuts});
 });



app.get('/get/me',authenticate,(req,res,next)=>{
    res.send(req.user);
});

app.listen(port, () => {
    console.log(`Server is up on ${port}`);
  });*/
  
