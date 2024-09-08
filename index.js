import express from "express";
import logger from 'morgan';
import CustomError from "./src/error/Error.js";
import authController from "./src/controller/authController.js";
import recipeController from "./src/controller/recipeController.js";

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use('/api/auth', authController);
app.use('/api/recipe', recipeController);


app.use((err, req, res, next) => {
    if (err instanceof CustomError) {
        const {status, message} = err
        res.status(status).json({message: message});
    }
    console.log(err);
    res.status(500).send({message:'서버 오류'});
    next();
});



app.listen(4000, async () => {

    console.log("Server가 4000번 포트에서 열렸습니다.");
});