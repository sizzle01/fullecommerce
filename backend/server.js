const app = require ("./app");
const dotenv = require("dotenv");
 
//config
dotenv.config({
    path: "backend/config/.env"
})

//create Server
const server = app.listen(process.env.PORT, () =>{
    console.log(`server is working on https://localhost:${process.env.PORT}`)
}) 