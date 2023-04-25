const jwt = require("jsonwebtoken");
require('dotenv').config();

const auth = (req,res,next) => {
    const token = req.headers.authorization;
    if(token){
        const deoded = jwt.verify(token, process.env.key, function (err, decoded) {
            if (decoded) {
                const UserID = deoded.userID;
                req.body.userID = UserID;
                next();
            } else {
                return res.status(401).json({"Eror":err.message,"alert":"Please Login First"});
            }
});
    } else {
        return res.status(401).json({message: "No token provided"});
    }
}