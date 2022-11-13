const mongoose = require('../config/mongooseConfig')

const datasSchema = new mongoose.Schema(
    {
        title: { type: String, required: [true, 'title: no puede ser vacio'] },
        description: { type: String, default:'' },
        completed:{type:Boolean},
    }, { timestamps: true }
);

// crea un objeto que contenga métodos para que Mongoose interactúe con MongoDB
const baseDatos = mongoose.model('restfullApiDb', datasSchema);

module.exports = baseDatos;