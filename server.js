const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

// Publicando un directorio
app.use(express.static(__dirname + '/public'));

//Express HBS engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');


const port = process.env.PORT || 3000;

app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'Roberto'
    });
});

app.get('/about', (req, res) => {

    res.render('about', {
        imagen: 'assets/img/imagen-1.jpg'
    });
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});