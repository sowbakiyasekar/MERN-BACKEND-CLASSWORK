
export const envDisplay = () => {
    console.log("Environment Variables:");
    console.log("APP_NAME:", process.env.APP_NAME || "Not defined");
    console.log("PORT:", process.env.PORT || "3000");
    console.log("AUTHOR:", process.env.AUTHOR || "Not defined");
    console.log("DB_NAME:", process.env.DB_NAME || "Local");

    console.log("Current Node Version:", process.version);
    console.log("Current Project Folder:", process.cwd());
};
