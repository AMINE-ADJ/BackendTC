
import express from "express";
import routerauth from './auth/index.js';
import routeruser from './user/index.js';
 const routers = express.Router();  


 routers.use('/auth', routerauth ); 
 routers.use('/user',routeruser); 


 export default routers; 