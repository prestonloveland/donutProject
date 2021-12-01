
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
let ejs = require("ejs");
app.set("view engine", "ejs");


/* Getting all the db querys */
const {getAllDonut} = require('./models/user');


// The code below allows the node js to find the public directory with the index.html file
const publicPath = path.join(__dirname, './public');
// Node js is using port 3000/ and when you push to cloud it will use process.env.PORT
const port = 3000;

// Bodyparser for using json data - dont need bodyparser anymore
app.use(express.urlencoded({extended: true}));
app.use(express.json()) // To parse the incoming requests with JSON payloads
app.use(express.static(publicPath));


 //GET index page 
// app.get('/', function(req, res, next) {
//     res.render('index');
// });

app.get('/', async (req, res, next) => {
    clothes = await getAllClothes()
    res.render('index', {dTable: clothes});
 });

app.listen(port, () => {
    console.log(`Server is up on ${port}`);
});