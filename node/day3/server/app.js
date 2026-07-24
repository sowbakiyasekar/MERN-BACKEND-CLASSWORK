import http from "http";
import dotenv from "dotenv";
import { studentManagement } from "./task1.js";
import { filePathDemo } from "./task2.js";
import { systemInfo } from "./task3.js";
import { envDisplay } from "./task4.js";
import { folderManagement } from "./task5.js";
dotenv.config();

const port = process.env.PORT || 5000;
const app = http.createServer();

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


//task1- studentMagement
console.log("Task 1: Student Management");
studentManagement();

//task2
console.log("Task 2: Folder Management");
filePathDemo();

//task3
console.log("Task 3: System Information");
systemInfo();

//task4
console.log("Task 4: Environment Variables");
envDisplay();


//task5
console.log("Task 5: File Management");
folderManagement();