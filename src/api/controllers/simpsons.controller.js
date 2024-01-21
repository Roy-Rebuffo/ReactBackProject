const Simpson = require('../models/simpsons.model');

const getSimpsons = async(req, res) => {
    try {
        const allSimpsons = await Simpson.find();
        return res.status(200).json(allSimpsons);
    } catch (error) {
        return res.status(500).json(error) 
    }
}

const getOneSimpsons = async(req, res) => {
    try {
        const {id} = req.params;

        const oneSimpson = await Simpson.findById(id).populate('ciudad');
        return res.status(200).json(oneSimpson);
    } catch (error) {
        return res.status(500).json(error) 
    }
}

const getSimpsonsBySurname = async(req, res) => {
    try {
        const {surname} = req.params;

        const oneSimpson = await Simpson.find({apellido: surname});
        return res.status(200).json(oneSimpson);
    } catch (error) {
        return res.status(500).json(error) 
    }
}

const postSimpsons = async(req, res) => {
    try {
        // console.log(req.body);
        const newSimpson = new Simpson(req.body);
        const createdSimpson = await newSimpson.save();
        return res.status(201).json(createdSimpson);
    } catch (error) {
        return res.status(500).json(error)
    }
}

const putSimpsons = async (req, res) => {
    try {
        const {id} = req.params;
        const putSimpsons = new Simpson(req.body);
        putSimpsons._id = id;
        const updateSimpsons = await Simpson.findByIdAndUpdate(id, putSimpsons, {new: true});
        if(!updateSimpsons){
            return res.status(404).json({message: "simpsons not found"});
        }
        return res.status(200).json(updateSimpsons);
    } catch (error) {
        return res.status(500).json(error)
    }
}

const deleteSimpsons = async (req, res) => {
    try {
        const {id} = req.params;
        const deleteSimpson = await Simpson.findByIdAndDelete(id);
        if(!deleteSimpson){
            return res.status(404).json({message: "simpsons not found"});
        }
        return res.status(200).json(deleteSimpson);
    } catch (error) {
        return res.status(500).json(error)
    }
}

module.exports = {getSimpsons, getOneSimpsons, getSimpsonsBySurname, postSimpsons, putSimpsons, deleteSimpsons}