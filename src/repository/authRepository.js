import {generate_uuid} from "../connection/uuid.js";
import conn from  "../connection/connection.js";
import {hashPassword} from "../connection/passwordHash..js";

export default{
    singUp: async (user_name, password) => {
        const uuid = generate_uuid();
        const pwd = hashPassword(password);
        const res = await conn.query(`
            INSERT INTO Users
            (
            user_id,
            user_name,
            password,
            session_id
            )
            VALUES(
                ?,
                ?,
                ?,
                "12345678"
            )
        `, [uuid, user_name, pwd]);
        return pwd;
    },
}