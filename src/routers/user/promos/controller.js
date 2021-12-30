import { UserModel } from "../../../models/User.js"; 
import { CouponareaModel } from "../../../models/couponarea.js";
import { PlanModel } from "../../../models/produit.js";


export const GetPromosByReg = async (req, res,next )=> { 
try {
    const promos = await fetchPromoareaByReg(req.body.Reg);  
    if(!promos) throw new Error("Ya pas des promos dans cette Region pour le moment !");
        res.status(200).json(promos); //hekka rani b3et la liste de promos brk sans localisation
} catch (err) {
    res.status(500).json({message : err.message})
}

}

const fetchPromoareaByReg =  async (region) => { 
const Locationcoupan = await CouponareaModel.findOne({region : region });  //selon le PREF_NAME hekka 
 if (!Locationcoupan) return null; 
 return Locationcoupan; 
}

export const CreatePlan = async ( req, res, next)=> { 
try {
    if (!req.body.Plan_Type || !req.body.Plan_Name || !req.body.Plan_Mark || !req.body.Plan_DE || !req.body.Plan_Code || !req.body.Plan_Produit || !req.body.Plan_Boutique  ) 
    {
 res.status(400).json({ message: "Missing attributes" }); 
     } else {
const createdproduct = await  PlanModel.create(req.body);
if (createdproduct) {
    res.status(200).json({ message: "Plan created successfully" });
} else {
    res.status(400).json({ message: "Plan creation failed" });
}
        }
} catch (error) {
    res.status(500).json({message : error.message })
}

}

export const GetPromosByProductndPrice = async (req, res,  next ) => { 
    try {
        const promos = await PlanModel.findOne( {Plan_Produit:req.body.Product, Plan_Price: req.body.Price  });
if (!promos) throw new Error("Ya pas des promos avec ces speceficitées !");
 res.status(200).json(promos);
    } catch (error) {
        res.status(500).json({message : error.message })
    }

}