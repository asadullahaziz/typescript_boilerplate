import { Schema, model } from "mongoose";

let UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true
    },
    age: Number
})

export default model("User", UserSchema);