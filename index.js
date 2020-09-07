const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const port = 8000;
app.use('/', require('./routes'));

app.listen(port , function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
});