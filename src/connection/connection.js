import mysql from "mysql2/promise";

const conn = mysql.createPool({
    host : "127.0.0.1",
    port: 3306,
    user : "root",
    password: "admin",
    database : "recipe_db"
});

export default{
    async query(queryString = "", params = []){
        const [rows,] = await conn.execute(queryString, params);
        return rows;
    }
}