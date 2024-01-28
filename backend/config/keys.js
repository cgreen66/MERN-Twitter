module.exports = {
    mongoURI: process.env.MONGO_URI,
    isProduction: process.env.NODE_ENV === 'production'
  }

  module.exports = {
    mongoURI: process.env.MONGO_URI,
    secretOrKey: process.env.SECRET_OR_KEY,
    isProduction: process.env.NODE_ENV === 'production'
  };
  
  const { secretOrKey } = require('./keys');

  exports.loginUser = async function(user) {
    const userInfo = {
      _id: user._id,
      username: user.username,
      email: user.email
    };
    const token = await jwt.sign(
      userInfo, // payload
      secretOrKey, // sign with secret key
      { expiresIn: 3600 } // tell the key to expire in one hour
    );
    return {
      user: userInfo,
      token
    };
  };