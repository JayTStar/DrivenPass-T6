import bcrypt from "bcrypt";
import dotenv from "dotenv"

import { UserData } from "../Repositories/userRepositories.js";

import * as userRepository from "../Repositories/userRepositories.js";

dotenv.config();

export async function singup(user: UserData){
    const {email,password} = user;

    await checkEmail(email);

    const encryptedPassword = encryptPassword(password);

    await userRepository.create({ email, password: encryptedPassword });
};

async function checkEmail(email: string){
    const user = await userRepository.findByEmail(email);

    if(user){
        throw{
            type: "conflict",
            message: "email already being used"
        };
    }
}

function encryptPassword(password: string){
    const encryptedPassword = bcrypt.hashSync(password, 10);
    return encryptedPassword;
}