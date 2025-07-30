import { User } from "../models/user.models.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
    try {
        const {username, email, password} = req.body;
        const user = await User.findOne({email})
        
        if(user){
            return res.status(400).json({message: "Account already exists!!!"})
        }
        else{
            const encryptedPassword = await bcryptjs.hash(password, 10);
            const newUser = new User({
                username: username,
                email: email, 
                password: encryptedPassword
            })
            await newUser.save()
            res.status(201).json({message: "Account created successfully!!!",
                user : {
                    _id: newUser._id,
                    username: newUser.username,
                    email: newUser.email
                }
            })
        }
    } catch (error) {
        console.log("Error: " + error.message);
        res.status(500).json({message: "Internal Server Error while signup!"})
    }
}

export const login = async (req, res) => {
    try {
        const {email, password} = req.body;
        
        const user = await User.findOne({email})
        if(user){
            const passwordCorrect = await bcryptjs.compare(password, user.password)
            if(!passwordCorrect){
                res.status(400).json({message: "Invalid Password!"})
            }
            else{
                res.status(200).json({
                    message: "Login Successful",
                    user : {
                        _id: user._id,
                        username: user.username,
                        email: user.email
                    }
                })
            }
        }
        else{
            res.status(400).json({message: "Account does not exist!"})
        }
    } catch (error) {
        console.log("Error: " + error.message);
        res.status(500).json({message: "Internal Server Error!"})
    }
}