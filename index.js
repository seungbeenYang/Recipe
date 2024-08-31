import express from "express";
import logger from 'morgan';
import conn from  "./src/connection/connection.js";
import authController from "./src/controller/authController.js";

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', async(req,res)=>{
    const test = await conn.query("SELECT * FROM Users");
    res.json(test);
})

app.use('/api/auth', authController);


app.listen(4000, async () => {

    console.log("Server가 4000번 포트에서 열렸습니다.");
});