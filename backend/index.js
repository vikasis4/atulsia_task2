const express = require('express');
const cors = require('cors');

// We are importing the sequelize so that our MySql database can connect when the server starts
const sequelize = require('./mysql');

const app = express();

// Importing the route 
const todo_route = require('./routes/todo');

// Setting up the CORS policy to allow all origin, for production we can specify the origins
app.use(cors('*'));
// Middleware functions used to handle incoming requests and parse their bodies. 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// using our defined routed
app.use('/api', todo_route)

const port = process.env.PORT || 3001;
app.listen(port, (err) => {
    if (!err) console.log(`Server Listening on Port ${port}`);
    else console.log('Something went wrong ', err);
})