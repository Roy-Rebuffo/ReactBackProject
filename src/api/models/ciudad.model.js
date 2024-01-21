const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ciudadSchema = new Schema(
    {
        nombre: {type: String, required: true},
        ciudadanos: [{type: Schema.Types.ObjectId, ref:"simpson"}]
    },{
        timestamps: true,
    }
)

const Ciudad = mongoose.model('ciudad', ciudadSchema);
module.exports = Ciudad;