import express from 'express';
import https from 'https'; 
import './core/db.js';

const app = express(); 

app.listen(3000,()=>console.log('Server is listening on port 3000')); 

