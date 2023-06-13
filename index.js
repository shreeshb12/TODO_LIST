const express = require('express');
const app=express();
const port=8000;
const db=require('./config/mongoose');
app.use(express.urlencoded()) 
app.use(express.static('./assets'))
app.set('layout extractStyles',true);
app.set('layout extractScripts',true)
app.set('view engine','ejs');
app.set('views','./views')
app.use('/',require('./routes'))
app.listen(port,(err)=>{
    if(err){
        console.error(`Error in running the server ${port}`);
        return;
    }
    console.log(`Server is running on port :${port}`);
})
