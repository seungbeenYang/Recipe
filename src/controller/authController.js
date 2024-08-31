import express from "express";
import {LengthCheck} from "../validator/common.js";
import {UserNameCheck} from "../validator/auth.js";
import authRepository from "../repository/authRepository.js";

const authController = express.Router();

authController.get("/login", (req, res) => {

});

authController.post("/signup", async (req, res, next) => {
    const {user_name, password} = req.body;

    try {
        LengthCheck('user_name',
            user_name,
            process.env.USER_NAME_MIN_LENGTH,
            process.env.USER_NAME_MAX_LENGTH);
        LengthCheck('password',
            password,
            process.env.PASSWORD_MIN_LENGTH,
            process.env.PASSWORD_MAX_LENGTH);

        await UserNameCheck("user_name", user_name);
        const result = await authRepository.singUp(user_name, password);
    } catch (e) {
        next(e);
    }
});


export default authController;