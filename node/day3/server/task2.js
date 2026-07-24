import path from "path";
import fs from "fs";

export const filePathDemo = () => {
    const pathA = path.join("public","css");
    const pathB = path.join("public","js");
    const pathC = path.join("public","images");

    const pathD = path.join("uploads","documents");
    const pathE = path.join("uploads","videos");

    fs.mkdir(pathA,{recursive:true},(err)=>{
        if(err) {
            console.log(err);
        }
        else {
            console.log("CSS created successfully");
        }
    });

    fs.mkdir(pathB,{recursive:true},(err)=>{
        if(err) {
            console.log(err);
        }
        else {
            console.log("JS created successfully");
        }
    }); 

    fs.mkdir(pathC,{recursive:true},(err)=>{
        if(err) {
            console.log(err);
        }
        else {
            console.log("Images created successfully");
        }
    });

    fs.mkdir(pathD,{recursive:true},(err)=>{
        if(err) {
            console.log(err);
        }
        else {
            console.log("Documents created successfully");
        }
    }); 

    fs.mkdir(pathE,{recursive:true},(err)=>{
        if(err) {
            console.log(err);
        }
        else {
            console.log("Videos created successfully");
        }
    }); 

    fs.mkdir("./config",{recursive:true},(err)=>{
        if(err) {
            console.log(err);
        }
        else {
            console.log("Config created successfully");
        }   
    });

    fs.mkdir("./logs",{recursive:true},(err)=>{
        if(err) {
            console.log(err);
        }
        else {
            console.log("Logs created successfully");
        }
    });
}

