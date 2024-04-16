const expess = require('express')
const logger = require('morgan'); 
const app = expess();
require('./db')
const userController = require('./controllers/userController');
const router = require('./controllers/userController');
const express = require('express');

const port = process.env.PORT || 3000;

// app.listen (PORT, ()=> {
//     console.log('server is running');
// })

// app.use('/users',userController);
app.use(express.json())
app.use(express.text())
//app.use(expess.urlencoded({extended}))
app.use(logger('dev')); 
  
//app.use('/users', userController); 

app.use(router)
app.listen(port, () => { 
  console.log(`Started at ${port}`); 
});