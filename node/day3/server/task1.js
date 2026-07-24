import fs from "fs";

export const studentManagement = () => {
    fs.mkdir("./students",{recursive:true},(err)=>{
        if(err) {
            console.log(err);
        }
        else {
            console.log("Folder created successfully");
        }
    });

    setTimeout(()=>{
        fs.writeFile("./students/data.txt","NAMES \n   ross\n   rachel\n   joey\n   phoebe\n   monica",(err)=>{
            if(err) {
                console.log(err);
            }
            else {
                console.log("File created successfully");
            }
        });
    },1000);

    setTimeout(()=>{
        fs.readFile("./students/data.txt","utf-8",(err,data)=>{
            if(err) {
                console.log(err);
            }
            else {
                console.log("File read successfully");
                console.log(data);
            }
        });
    },2000);

    setTimeout(()=>{
        fs.appendFile("./students/data.txt","\n   chandler",(err)=>{
            if(err) {
                console.log(err);
            }
            else {
                console.log("Name added successfully");
            }
        });
    },3000);

    setTimeout(()=>{
        fs.readFile("./students/data.txt","utf-8",(err,data)=>{
            if(err) {
                console.log(err);
            }
            else {
                console.log("File read after appending name successfully");
                console.log(data);
            }
        });
    },4000);
}