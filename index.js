const express = require('express');
const app = express();
const port = 8000;
app.get('/',function(req,res){
    return res.end('<h1>hi</h1>');
})

app.listen(port , function(err){
    console.log(`Server is up and running on port : ${port}`)
})