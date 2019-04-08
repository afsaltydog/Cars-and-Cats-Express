// Load the express module and store it in the variable express (Where do you think this comes from?)
var express = require("express");
console.log("Let's find out what express is", express);
// invoke express and store the result in the variable app
var app = express();
console.log("Let's find out what app is", app);
// use app's get method and pass it the base route '/' and a callback

// This sets the location where express will look for the ejs views
app.set('views', __dirname + '/views'); 
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');

// this is the line that tells our server to use the "/static" folder for static content
app.use(express.static(__dirname + "/static"));
// two underscores before dirname
// try printing out __dirname using console.log to see what it is and why we use it

app.get('/', function(request, response) {
    // just for fun, take a look at the request and response objects
   console.log("The request object", request);
   console.log("The response object", response);
   // use the response object's .send() method to respond with an h1
   response.send("<h1>Hello Express</h1>");
})

app.get('/cars', function(request, response) {
    // just for fun, take a look at the request and response objects
   console.log("The request object", request);
   console.log("The response object", response);
   // use the response object's .send() method to respond with an h1
   response.render('cars');
})

app.get('/cats', function(request, response) {
    // just for fun, take a look at the request and response objects
   console.log("The request object", request);
   console.log("The response object", response);
   // use the response object's .send() method to respond with an h1
   response.render('cats');
})

app.get('/cats/1', function(request, response) {
    // just for fun, take a look at the request and response objects
   //console.log("The request object", request);
   //console.log("The response object", response);
   console.log("I am in the /cats/1 route")
   // use the response object's .send() method to respond with an h1
   response.render('cat1');
})

app.get('/cats/2', function(request, response) {
    // just for fun, take a look at the request and response objects
   //console.log("The request object", request);
   //console.log("The response object", response);
   console.log("I am in the /cats/2 route")
   // use the response object's .send() method to respond with an h1
   response.render('cat2');
})

app.get('/cats/3', function(request, response) {
    // just for fun, take a look at the request and response objects
   //console.log("The request object", request);
   //console.log("The response object", response);
   console.log("I am in the /cats/3 route")
   // use the response object's .send() method to respond with an h1
   response.render('cat3');
})

app.get('/cats/4', function(request, response) {
    // just for fun, take a look at the request and response objects
   //console.log("The request object", request);
   //console.log("The response object", response);
   console.log("I am in the /cats/4 route")
   // use the response object's .send() method to respond with an h1
   response.render('cat4');
})

app.get('/form', function(request, response) {
    // just for fun, take a look at the request and response objects
   console.log("The request object", request);
   console.log("The response object", response);
   // use the response object's .send() method to respond with an h1
   response.render('form');
})

app.get("/users", function (request, response){
    // hard-coded user data
    var users_array = [
        {name: "Michael", email: "michael@codingdojo.com"}, 
        {name: "Jay", email: "jay@codingdojo.com"}, 
        {name: "Brendan", email: "brendan@codingdojo.com"}, 
        {name: "Andrew", email: "andrew@codingdojo.com"}
    ];
    response.render('users', {users: users_array});
})

// tell the express app to listen on port 8000, always put this at the end of your server.js file
app.listen(8000, function() {
  console.log("listening on port 8000");
})