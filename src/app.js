import express from 'express';
// import https from 'https'; 
import './core/db.js';
import routers from './routers/index.js'; 
const app = express(); 
const port = 7000; 

// app.get('/', function (req,res) {
//     res.send('<h1> Html tags !! </h1>'); 
// });
// app.get('/about', function(req,res) {
// res.send('Im Amine AD 2CP student at ESI ALGIERS !!'); 
// }); 

app.use('/', routers); 


app.listen(port,()=>console.log(`Server is listening on port ${port}`)); 

