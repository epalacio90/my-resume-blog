const User = require('../models/User_model');

const getUserExistence = async(req, res, next) =>{
    try{
        const user = await User.find({});
        return res.status(200).json({count: user.length});
    }catch(e){
        return next(e);
    }
}


exports.getUserExistence = getUserExistence;