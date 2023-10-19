const { User } = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const JWT_SECRET = "Danishisweb@dev$expert";
exports.createUser = async (req,res) =>{
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password,salt);
   try {
    const user = new User ({...req.body,password:secPass});
    await user.save();
    const data = {
        user: {
            id: user._id,
        }
    };
    const authToken = jwt.sign(data, JWT_SECRET);
      res.send(authToken);
}
    catch(error){
        res.send(error);
    }
}
exports.allUsers  = async (req,res) =>{
   try {const users = await User.find();
    res.send(users);}
    catch(error){
        res.send(error);
    }
}