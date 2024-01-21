const express = require('express');
const {getSimpsons, getOneSimpsons, getSimpsonsBySurname, postSimpsons, putSimpsons, deleteSimpsons} = require('../controllers/simpsons.controller');
const { isAuth } = require('../../middlewares/auth');

const router = express.Router();

router.get('/', getSimpsons);
router.get('/:id', getOneSimpsons);
router.get('/apellido/:surname', getSimpsonsBySurname);
router.post('/', postSimpsons);
router.put('/:id', putSimpsons);
router.delete('/:id', deleteSimpsons);

module.exports = router;