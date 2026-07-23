import dotenv from "dotenv";
import http from "http";
import os from "os";
import path from "path";

dotenv.config();

const imagePath = path.join("uploads","images")
const videoPath = path.join("uploads","videos")
const documentPath = path.join("uploads","documents")

const relativeFilePath = "./public/images/logo.png";
const absolutePath = path.resolve(relativeFilePath);
const PORT = process.env.PORT || 3000;
const APPLICATION_NAME = process.env.APPLICATION_NAME || "App";
const AUTHOR_NAME = process.env.AUTHOR_NAME || "Unknown";
const app = http.createServer();

app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`);
})


//task1- os module
console.log("Task-1 OS module")
console.log(`Hostname: ${os.hostname()}`)
console.log(`Architecture: ${os.arch()}`)
console.log(`Platform: ${os.platform()}`)
console.log(`CPU info: ${JSON.stringify(os.cpus())}`)
console.log(`Total Memory: ${os.totalmem()}`)
console.log(`Free Memory: ${os.freemem()}`)
console.log('');

//task2- process module
console.log("Task-2 Process module")
console.log(`Node.js Version: ${process.version}`)
console.log(`Current Working Directory: ${process.cwd()}`)
console.log(`Platform: ${process.platform}`)
console.log(`Command Line Arguments: ${process.argv}`)
console.log(`Environment Variables: ${JSON.stringify(process.env)}`)
console.log('');


//task3- path module
console.log("Task-3 Path module")
console.log(`Image Path: ${imagePath}`)
console.log(`Video Path: ${videoPath}`)
console.log(`Document Path: ${documentPath}`)
console.log('');

//task4- relative vs absolute path  
console.log("Task-4 Relative vs Absolute Path")
console.log(`Relative File Path: ${relativeFilePath}`)
console.log(`Absolute File Path: ${absolutePath}`)
console.log('');

//task5- env variables
console.log("Task-5 Env variables")
console.log(`Application Name: ${APPLICATION_NAME}`)
console.log(`Author Name: ${AUTHOR_NAME}`)
console.log(`Port: ${PORT}`)
