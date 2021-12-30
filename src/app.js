import express from 'express';
import https from 'https'; 
import './core/db.js';

const app = express(); 

// app.get('/', function (req,res) {
//     res.send('<h1> Html tags !! </h1>'); 
// });
// app.get('/about', function(req,res) {
// res.send('Im Amine AD 2CP student at ESI ALGIERS !!'); 
// }); 

app.use('/', routers); 


app.listen(3000,()=>console.log('Server is listening on port 3000')); 

