
import express from "express";
import {GetPromosByReg,CreatePlan,GetPromosByProductndPrice} from './controller.js'
const router = express.Router(); 


router.get('/:Reg', GetPromosByReg); 
router.get('/:Product&:Prix', GetPromosByProductndPrice); 

router.post('/', CreatePlan); 

export default router; 