const express = require('express');
const {getCiudades, getOneCiudad, postCiudad} = require('../controllers/ciudad.controller');
const ciudadRoutes = express.Router();

ciudadRoutes.get('/', getCiudades);
ciudadRoutes.get('/:id', getOneCiudad);
ciudadRoutes.post('/', postCiudad);

module.exports  = ciudadRoutes;