const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

dotenv.config();

const getToken = (parameters, duration = '10h') => {
    let token;
    try {
        token = jwt.sign(parameters, process.env.TOKEN_SECRET);
        return token;
    } catch (err) {
        console.log('error', err);
        throw err;
    }
};

module.exports = getToken;
