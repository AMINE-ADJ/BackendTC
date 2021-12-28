import express from 'express';

const app = express(); 

app.get('/', function (req,res) {
    res.send('Helloworld'); 
});

app.listen(3000,()=>console.log('Server is listening on port 3000')); 