#para ejecutar los metodos, se debe realizar atraves de postman.

una vez iniciado el server (nodemon server.js) ejecutar en postman lo siguiente:

GET http://localhost:8000/buscaTodos para buscar todos

GET http://localhost:8000/buscaUno/637148b82f5e3ad85dca43c7 con un ID establecido que se pasa por la URL

POST http://localhost:8000/nuevo para agregar un reg a la BD con la estructura JSON en formato RAW (configurar en el parametro BODY)
{
"title": "ejemplo",
"description": "ejemplo",
"completed": true
}

PUT http://localhost:8000/update/6371489c2f5e3ad85dca43c5 para hace update de un registro, entregando todos los parametros
{
"title": "ejemplo",
"description": "ejemplo",
"completed": true
}

DELETE  http://localhost:8000/delete/63714f243a2b19e5b79d180a para borrar un registro a traves del ID