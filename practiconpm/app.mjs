
import express from 'express'


//crear una instancia de express
const app = express()


// configuracion el puerto en el que el servidor escuchará
const PORT = 3000;


// Ruta Básica
app.get('/', (req, res) => {
    res.send('<H1>!Hola mundo¡</H1>');
});

//Ruta GET para recibir datos simples
//solicitud http://localhost:3000/data
app.get('/data', (req, res) => {
    res.send('datos recibidos');
});

//Ruta GET con parametros de ruta
//Solicitud: http://localhost:3000/user/123
app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`Perfil del usuario con id: ${userId}`);
});

// Ruta GET con multiples parametrso
// solicitud: http://localhost:3000/product/electronics/456
app.get('/seach', (req, res) => {
    const query = req.query.query
    res.send(`rESULTADO DE BUSQUEDA PARA: ${query}`);
})

//Ruta GET con multiples parametros de consulta
//solicitud: http://localhost:3000/filter?/type=book&minPrice=10&maxPrice=50
app.get('/filter', (req, res) => {
    const {type, minPrice, maxPrice} = req.query;
    res.send(`Filtrar por tipo: ${type}, rango de precio: ${minPrice} - ${maxPrice}`);
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});