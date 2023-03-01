/***********************/
/** REQUIRED LIBRARIES */
/***********************/
const express = require('express'); // Import express module
const bodyParser = require('body-parser'); // Import body-parser module
const url = require('url') // Import url module

// Define our app
const app = express(); 

// Set the HTTP port
const port = 9190;

// Configure app to use body-parser for JSON (REST)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ROUTES FOR OUR API
// ==================
const router = express.Router();

// This route is called every time a request is sent to the server.
// We use it for debugging/logging 
router.use(function(req, res, next)
{
    console.log('Something is happening.');
    next();
})

// This is our default / health check route if we just called http://localhost:8080/
router.get('/', function(req, res) 
{
    res.json({ message: 'INFO: Health check succeeded!' });   
});

// This is is what we are going to call - for now just get it to wait a short while, then return
router.get('/api', function(req, res) 
{
    // Calculate a random wait time between 3000 and 5000 milliseconds
    let min = Math.ceil(3000);
    let max = Math.floor(5000);
    let milliseconds = Math.floor(Math.random() * (max - min) + min);

    console.log('INFO: About to wait  ' + milliseconds + ' milliseconds.')

    var waitTill = new Date(new Date().getTime() + milliseconds);
    while(waitTill > new Date()){}
    res.status(200).json({ message: 'INFO: Service 1 is complete! Processing time was ' + milliseconds + ' milliseconds.' }); 
});

// Register our routes
app.use('/', router);

// Start the server
app.listen(port);
console.log('INFO: Datapool Manager now running on port ' + port);