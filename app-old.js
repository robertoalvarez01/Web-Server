const http = require('http');

http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'application/json' });

        let salida = {
            nombre: 'Roberto',
            edad: 18,
            url: req.url
        }

        res.write(JSON.stringify(salida));

        res.end();
    })
    .listen(3000);

console.log('port: 3000');