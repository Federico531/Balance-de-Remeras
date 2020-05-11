const express = require('express');
const app = express();

app.use(express.json());

/* app.get('/', (req,res)=>{      
    res.send("ACA EL GET");
}) */

app.use(express.static('public'));

app.listen(3000, (req,res)=> {
    console.log("connected to port 3000");
})

