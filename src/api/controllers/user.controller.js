const { validateEmail, validatePassword, usedEmail } = require('../../utils/validations');
const bcrypt = require('bcrypt');
const User = require('../models/user.model');
const { generateSign } = require('../../utils/jwt');

const login = async (req, res) => {
    try {
        const getUser = await User.findOne({email: req.body.email});
        if(!getUser) {
            return res.status(404).json({message: 'user not found'});
        }
        if(!bcrypt.compareSync(req.body.password, getUser.password)){
            return res.status(404).json({message: 'invalid password'});
        }
        const token = generateSign(getUser._id, getUser.email);
        return res.status(200).json({getUser, token});
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
};

const register = async (req, res) => {
    try {
        const newUser = new User(req.body);
        console.log(req.body);
        if(!validateEmail(newUser.email)){
            return res.status(400).send({message: 'Invalid email'})
        }
        if(!validatePassword(newUser.password)){
            return res.status(400).send({message: 'Invalid password'})
        }
        if(await usedEmail(newUser.email) > 0){
            return res.status(400).send({message: 'Email already in use'})
        }
        newUser.password = bcrypt.hashSync(newUser.password, 10);
        const createdUser = await newUser.save();
        console.log(createdUser);
        return res.status(201).json(createdUser);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const checkSession = async (req, res) => {
    try {
       return res.status(200).json(req.user) 
    } catch (error) {
        return res.status(500).json(error);
    }
}

module.exports = {login, register, checkSession}