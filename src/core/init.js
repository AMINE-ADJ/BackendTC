// ra7 tkhdem b des fichiers csv, puis y aura des boucles simples psk ya pas de relations , donc ra7 ykono kamel ki ta3 stadium fl  footbalcup 

import fs from 'fs'; 
import { UserModel } from '../models/User.js';
import { PreflocModel } from '../models/Prefloc.js';
import { CoupondetailModel } from '../models/coupondetail.js';
import { CouponlistModel } from '../models/couponlist.js';
import { CouponareaModel } from '../models/couponarea.js';
import { CouponvisitModel } from '../models/couponvisit.js';


import './db.js'; 

import csv from 'csv-parser'; 

export const init =  async function ()  { 
try { 

//users collection init.

    const usersCount =  await UserModel.countDocuments().exec();
    console.info(`Count of users are ${usersCount}`);
    // if we don't have users
    if (usersCount === 0) {
        // insert default users
        // const users = JSON.parse(fs.readFileSync(`${process.cwd()}/user_list.csv`, 'utf8')); if we where on json files. 
    var csvData =[];
    fs.createReadStream(`${process.cwd()}/user_list.csv`) 
    .pipe(csv())
    .on('data', function(csvrow) {
        // console.log(csvrow);
        csvData.push(csvrow);        
    })
    .on('end',async function()  {
    //   console.log(csvData);
    // console.log(`${csvData.length}`);
        for (let i = 0; i < csvData.length; i++) {
            console.log(csvData[i]);
            await UserModel.create(csvData[i]); //premiere iteration matkonch kayna collection ycreeyiha, apres ybda yinserer document par document 
        }
    });
    }
// preflocs collection init. 
    const preflocsCount =  await PreflocModel.countDocuments().exec();
    console.info(`Count of preflocs are ${preflocsCount}`);
    
    if (preflocsCount === 0) {
    var csvData =[];
    fs.createReadStream(`${process.cwd()}/prefecture_locations.csv`) 
    .pipe(csv())
    .on('data', function(csvrow) {

        csvData.push(csvrow);        
    })
    .on('end',async function()  {

        for (let i = 0; i < csvData.length; i++) {
            console.log(csvData[i]);
            await PreflocModel.create(csvData[i]); 
        }
    });
    }
    //couponlists collection init. 
    
    const couponlistsCount =  await CouponlistModel.countDocuments().exec();
    console.info(`Count of preflocs are ${couponlistsCount}`);

    if (couponlistsCount === 0) {

    var csvData =[];
    fs.createReadStream(`${process.cwd()}/coupon_list_train.csv`) 
    .pipe(csv())
    .on('data', function(csvrow) {

        csvData.push(csvrow);        
    })
    .on('end',async function()  {

        for (let i = 0; i < csvData.length; i++) {
            console.log(csvData[i]);
            await CouponlistModel.create(csvData[i]); 
           

        }
    });
    } //how to represent the NA field. 
 
    //coupondetails collection init. 
        const coupondetailsCount =  await CoupondetailModel.countDocuments().exec();
    console.info(`Count of preflocs are ${coupondetailsCount}`);

    if (coupondetailsCount === 0) {

    var csvData =[];
    fs.createReadStream(`${process.cwd()}/coupon_detail_train.csv`) 
    .pipe(csv())
    .on('data', function(csvrow) {
        
        csvData.push(csvrow);        
    })
    .on('end',async function()  {

        for (let i = 0; i < csvData.length; i++) {
            await CoupondetailModel.create(csvData[i]); 
            console.log(csvData[i]);
        }
    });
    }
// couponarea collection init. 
const couponareasCount =  await CouponareaModel.countDocuments().exec();
console.info(`Count of users are ${couponareasCount}`);
// if we don't have users
if (couponareasCount === 0) {
    // insert default users
    // const users = JSON.parse(fs.readFileSync(`${process.cwd()}/user_list.csv`, 'utf8')); if we where on json files. 
var csvData =[];
fs.createReadStream(`${process.cwd()}/coupon_area_train.csv`) 
.pipe(csv())
.on('data', function(csvrow) {
    // console.log(csvrow);
    csvData.push(csvrow);        
})
.on('end',async function()  {
//   console.log(csvData);
// console.log(`${csvData.length}`);
    for (let i = 0; i < csvData.length; i++) {
        console.log(csvData[i]);
        await CouponareaModel.create(csvData[i]); //premiere iteration matkonch kayna collection ycreeyiha, apres ybda yinserer document par document 
    }
});
}
//  couponvisits collection init. 

 const couponvisitsCount =  await CouponvisitModel.countDocuments().exec();
 console.info(`Count of preflocs are ${couponvisitsCount}`);
 
 if (couponvisitsCount === 0) {
    
 var csvData =[];
 fs.createReadStream(`${process.cwd()}/coupon_visit_train.csv`) 
 .pipe(csv())
 .on('data', function(csvrow) {
     
     csvData.push(csvrow);        
 })
 .on('end',async function()  {
 
     for (let i = 0; i < csvData.length; i++) {

         await CouponvisitModel.create(csvData[i]); 
         console.log(csvData[i]);

     }
 });
 }

    }catch(err) { 
    console.error(err);
    }

} 

