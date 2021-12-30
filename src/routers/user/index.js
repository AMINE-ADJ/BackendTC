import express from "express";
// import {getcoupon} from './controller.js'; 
import routerpromos from './promos/index.js'
const router = express.Router(); 

// router.get('/user/promo', getcoupon); 
    router.get('/promos',routerpromos ); 

export default router; 