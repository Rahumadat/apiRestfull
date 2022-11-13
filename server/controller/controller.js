

const baseDatos = require('../model/modelo');


module.exports = {
    buscaTodos: async function (req, res) {
        const datas = await baseDatos.find();
        res.json(datas);
    },

    buscaUno: async function (req, res) {
        // {
        //     "_id": "636d57dee80f54419378d9a1"
        // }
        let id = req.params.id;

        baseDatos.find({ _id: id })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    
    nuevo: async function (req, res) {
        // {
        //     first_name: 'steve',
        //     last_name: 'Jobs',
        //     email: 'steve.jobs@gmail.com',
        //     password: '123456'
        // }
        const body = req.body;
        const user = new baseDatos(body);
        user.save()
        .then( data => res.json(data))
        .catch(err => res.json(err));
    },

    update: async function (req, res) {
 
        const id = req.params.id;
        const body = req.body;
        
        baseDatos.updateOne({ _id: id}, body )
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },

    delete: async function (req, res) {
        
        let id = req.params.id;
        
        baseDatos.deleteOne({ _id: id })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    }
  
};



 