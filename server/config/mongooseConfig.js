const mongoose = require('mongoose');

//para conectarnos o crear la BD
mongoose.connect('mongodb://localhost/restfullApiDb', { useNewUrlParser: true });

module.exports = mongoose;