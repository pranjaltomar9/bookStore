import mongoose from "mongoose";
import { Schema } from "mongoose";

const bookSchema = new Schema({
    name : String,
    price : Number,
    category : String,
    image : String,
    title : String
}, {timestamps : true})

export const Book = mongoose.model("Book", bookSchema)