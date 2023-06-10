const express = require('express');

const app=express();

const port=8000;

app.listen(port,(err)=>{
    if(err){
        console.error(`Error in running the server ${port}`);
        return;
    }
    console.log(`Server is running on port :${port}`);
})