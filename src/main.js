const express = require('express')

const articulos = []

function generarId() {
    return `${Date.now()}`
}
const app = express()

app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('inicio', { articulos });
});

app.post('/articulos', (req, res) => {
    id = generarId()
    articulos.push(req.body,id)
    console.log(articulos)
    res.redirect('/')
});

const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))
