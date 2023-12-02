
const express = require("express");
const  connection  = require("./config/db");

const app = express()


const cors = require("cors")
const userRouter = require("./Router/userRouter")
app.use(express.json())
app.use("/api",userRouter)
app.listen(9090, async () => {
    try {
        await connection()
        console.log("starting...");
    }
    catch (err) {
        console.log(err, "error during starting server");
    }
})