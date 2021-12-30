import mongoose from "mongoose"; //n'oublie pas d'installer mongoose. 
import {init} from "./init.js"

const username = "team01"; 
const password ="team01"; 

const dbUrl =`mongodb+srv://${username}:${password}@cluster0.mztwh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`; 

const promise = mongoose.connect(dbUrl); 
promise.then(()=> {
    init().then(()=>{
        console.log('Initialisation completed !!');
    })
}).catch(err=> {
    console.error(err.message);
})

mongoose.connection.on("connected", ()=>
    console.log('connected to MongoDB')
); 
mongoose.connection.on("disconnected", () =>
    console.log('Connection disconnected')
); 
mongoose.connection.on("error", (err)=>console.log("Connnection error"+err.message)); 
 process.on("SIGINT", ()=>{
     mongoose.connection.close( ( ) => {
         console.log('Connection Stoped');
         process.exit(0); 
     }); 
 }); 
