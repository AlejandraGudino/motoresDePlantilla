const express = require('express')
const { databaseArticulos } = require("../databases/databaseArticulos.js")
const webRouter = express.Router()

webRouter.get('/', (req, res) => {
    res.sendFile('index.html', { root: 'views' })
})

webRouter.get('/datos', async (req, res) => {
    const data = databaseArticulos.obtenerTodos()
    
    res.render('datos')
})
webRouter.post('/enviarArticulos', async (req, res) => {
    var body = req.body;
    var res_body = {
        titile: body.titile,
        price: body.price,
        thumbnail: thumbnail
    };
    databaseArticulos.agregarArticulos(body)
    res.render('from',res_body);
})
module.exports = { webRouter }