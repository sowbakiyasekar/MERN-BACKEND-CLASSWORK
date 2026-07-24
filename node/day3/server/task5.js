import fs from "fs";
import path from "path";
import os from "os";

export const folderManagement = () => { 
    const pathA = path.join("storage","reports");
    const pathB = path.join("storage","backup");
    const pathC = path.join("uploads","images");
    const pathD = path.join("uploads","documents");

    setTimeout(()=>{

    fs.mkdir(pathA,{recursive:true},(err)=>{
        if(err) {
            console.log(err);
        }
        else {
            console.log("Reports folder created successfully");
        }
    });

    fs.mkdir(pathB,{recursive:true},(err)=>{
        if(err) {
            console.log(err);
        }
        else {
            console.log("Backup folder created successfully");
        }
    });

    fs.mkdir(pathC,{recursive:true},(err)=>{
        if(err) {
            console.log(err);
        }
        else {
            console.log("Images folder created successfully");
        }
    });

    fs.mkdir(pathD,{recursive:true},(err)=>{
        if(err) {
            console.log(err);
        }
        else {
            console.log("Documents folder created successfully");
        }
    });

},1000 );

    setTimeout(()=>{
        fs.writeFile("./storage/reports/report.txt","This is the report file",(err)=>{
            if(err) {
                console.log(err);
            }
            else {
                console.log("Report file created successfully");
            }
        });
    },2000);

    setTimeout(()=>{
        fs.readFile("./storage/reports/report.txt","utf-8",(err,data)=>{
            if(err) {
                console.log(err);
            }
            else {
                console.log("Report file read successfully");
                console.log(data);
            }
        });
    },3000);

    console.log("Hostname:", os.hostname());
    console.log("Platform:", process.platform);
    console.log("Node Version:", process.version);
    console.log("Current Working Directory:", process.cwd());
    console.log("Environment Variables:", JSON.stringify(process.env));


    setTimeout(()=>{
        fs.rename("./storage/reports/report.txt","./storage/reports/daily-report.txt",(err)=>{
            if(err) {
                console.log(err);
            }
            else {
                console.log("Report file renamed successfully");
            }
        });
    },4000);

    setTimeout(()=>{
        fs.copyFile("./storage/reports/daily-report.txt","./storage/backup/daily-report.txt",(err)=>{
            if(err) {
                console.log(err);
            }
            else {
                console.log("Report file copied to backup folder successfully");
            }
        });
    },5000);

    setTimeout(()=>{
        fs.unlink("./storage/reports/daily-report.txt",(err)=>{
            if(err) {
                console.log(err);
            }
            else {
                console.log("Original report file deleted successfully");
            }
        }); 
    },6000);
}
