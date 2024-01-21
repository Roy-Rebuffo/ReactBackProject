const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const simpsonsSchema = new Schema(
    {
        nombre: {type: String, required: true},
        apellido: {type: String, required: true},
        edad: {type: Number, required: false},
        foto: {type: String, required: false},
        ciudad: {type: Schema.Types.ObjectId, ref: 'ciudad'}
    },{
        timestamps: true
    }
)

const Simpson = mongoose.model('simpson', simpsonsSchema);

module.exports = Simpson;