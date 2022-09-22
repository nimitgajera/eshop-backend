
const {expressjwt:expressjwt}=require("express-jwt");


function authJwt(){
    const secret = process.env.secret;
    const api = process.env.API_URL;
    return expressjwt ({
        secret,
        algorithms:["HS256"],
    }).unless({
        path:[
            `/users/login`,
            `/users/register`,
        ],
    });
}

module.exports = authJwt;