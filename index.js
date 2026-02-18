const express = require('express');
const apiRouter = require('./server');
const cors = require('cors');
const { errorLogs, handleError } = require('./middleware/error.handle');
const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hola mundo');
});
// req = request, la peticion
// res = response, la respuesta

apiRouter(app);

app.use(handleError);
app.use(errorLogs);

app.listen(port, (req, res) => {
  console.log(`Escuchando en el puerto ${port}`);
});
