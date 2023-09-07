const createError = require('http-errors');
const bcrypt = require('bcryptjs');
const User = require('../models/User_model');
const getToken = require('../helpers/token_helper')

const getUserExistence = async(req, res, next) =>{
    try{
        const user = await User.find({});
        return res.status(200).json({count: user.length});
    }catch(e){
        return next(e);
    }
}

const createDefaultUser = async(req, res, next) =>{
    try{
        const userList = await User.find({});
        if(userList.length === 0) {
            const user = new User({
                name: "admin",
                email: "admin@mail.com",
                password: "myDefaultPass123",
            });
            await user.save();
            console.log('the user is:: ', user)
        }

        return res.status(200).json({success: true});
    }catch(e){
        return next(e);
    }
}

const login = async(req, res, next) =>{
    let { email, password } = req.body;

    email = (email || '').toLowerCase();

    let existingUser;

    try {
        existingUser = await User.findOne({ email });
    } catch (err) {
        const error = new createError(500, 'Logging in failed, please try again later.');
        return next(error);
    }

    if (!existingUser) {
        const error = new createError(403, 'Invalid credentials, could not log you in.');
        return next(error);
    }

    let isValidPassword = false;
    try {
        isValidPassword = await bcrypt.compare(password, existingUser.password);
    } catch (err) {
        const error = new createError(500, 'Could not log you in, please check your credentials and try again.');
        return next(error);
    }

    if (!isValidPassword) {
        const error = new createError(403, 'Invalid credentials, could not log you in.');
        return next(error);
    }

    let token;
    try {
        const parameters = { userId: existingUser.id, email: existingUser.email };
        token = getToken(parameters);
    } catch (err) {
        const error = new createError(500, 'Login failed');
        return next(error);
    }

    res.status(200).json({
        userId: existingUser.id,
        email: existingUser.email,
        token: token,
    });
}

exports.getUserExistence = getUserExistence;
exports.createDefaultUser = createDefaultUser;
exports.login = login;