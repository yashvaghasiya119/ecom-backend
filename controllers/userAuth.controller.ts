import User from "../models/user.model.ts";
import { findUserByEmail } from "../utills/auth.ts";

export async function registerUser(req:any,res:any){

    const {firstName,username,email,password, lastName, phone,role} = req.body;

    if(!firstName || !username || !email || !password || !lastName || !phone){
        return res.status(400).json({message:"All fields are required"});
    }

    const findUser = await findUserByEmail(email, username, phone)
    
    if(findUser){
        return res.status(400).json({message:"User already exists"});
    }

    const userCreate = await User.create({
        firstName,
        lastName,
        username,
        email,
        phone,
        password,
        role
    })

 return res.status(200).json({message:"User registered successfully"});
}

export function loginUser(){

}