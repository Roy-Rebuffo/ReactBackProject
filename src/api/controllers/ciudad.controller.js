const Ciudad = require('../models/ciudad.model');

const getCiudades = async (req, res) => {
    try {
        const allCiudades = await Ciudad.find();
        return res.status(200).json(allCiudades);
    } catch (error) {
        return res.status(500).json(error)
    }
}


const getOneCiudad = async (req, res) => {
    try {
        const {id} =req.params;
        const oneCiudad = await Ciudad.findById(id).populate('ciudadanos');
        return res.status(200).json(oneCiudad);
    } catch (error) {
        return res.status(500).json(error)
    }
}


const postCiudad = async (req, res) => {
    try {
        const newCiudad = new Ciudad(req.body);
        const createdCiudad = await newCiudad.save();
        return res.status(201).json(createdCiudad);
    } catch (error) {
        return res.status(500).json(error)
    }
}



module.exports = {getCiudades, getOneCiudad, postCiudad};