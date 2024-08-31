import { v4 as uuidv4 } from 'uuid';

export const generate_uuid = () => {
    const tokens = uuidv4().split('-');
    return tokens[0] + tokens[1] + tokens[2] + tokens[3] + tokens[4];
}

export const return_uuid = (id) => {
    const tkn0 = id.slice(0,7);
    const tkn1 = id.slice(8,11);
    const tkn2 = id.slice(12,15);
    const tkn3 = id.slice(16,19);
    const tkn4 = id.slice(20,31);
    return tkn0+'-'+tkn1+'-'+tkn2+'-'+tkn3+'-'+tkn4;


}