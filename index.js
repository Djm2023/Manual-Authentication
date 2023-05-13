const express = require('express');

const port = 8080;

const app = express()

const expressLayouts = require('express-ejs-layouts');

app.use(expressLayouts);
app.use(express.static('./assets'));
app.use('/' , require('./routes/users'));


app.set('view engine' , 'ejs');
app.set('views' , './views');

app.listen(port , function(error){
    if(error){
        console.log('Error in connecting to the server',error);
        return;
    }
    console.log('Successfully connected to the server with port ::',port);
});