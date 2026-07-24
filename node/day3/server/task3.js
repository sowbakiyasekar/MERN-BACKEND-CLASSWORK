import os from 'os';

export const systemInfo = () => {
    console.log("System Information:");
    console.log("Node Version:", process.version);
    console.log("Current Working Directory:", process.cwd());
    console.log("Hostname:", os.hostname());
    console.log("Platform:", os.platform());
    console.log("Architecture:", os.arch());
    console.log("CPU Cores:", os.cpus().length);
    console.log("Total Memory:", os.totalmem());
    console.log("Free Memory:", os.freemem());
    console.log("Process ID:", process.pid);
};

