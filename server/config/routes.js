

module.exports = function (app) {

    const express = require('express');
//************************************** */
    //devolver JSON de nuestra api
    app.use(express.urlencoded({extended: true}));
    app.use(express.json());

    const controller = require('../controller/controller')
    
//**aqui estan las rutas para cada metodo que se invoca en el controller */

    app.get('/buscaTodos', function (req, res) {
        controller.buscaTodos(req,res);
    });

    app.get('/buscaUno/:id', function (req, res) {
        controller.buscaUno(req,res);
    });

    app.post('/nuevo', function (req, res) {
        controller.nuevo(req,res);
    });

    app.put('/update/:id', function (req, res) {
        controller.update(req,res);
    });

    app.delete('/delete/:id', function (req, res) {
        controller.delete(req,res);
    });
}


