import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import bookRoute from "./routes/book.routes.js"
import userRoute from "./routes/user.routes.js"

const app = express()
app.use(cors());
app.use(express.json())
dotenv.config();

( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${process.env.DB_NAME}`)

        app.on("error", (error) => {
            console.log("ERRR: ", error);
            throw error            
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);            
        })
    } catch (error) {
        console.error("ERROR: ", error)
        throw err
    }
})()

app.use("/book", bookRoute);
app.use("/user", userRoute)

