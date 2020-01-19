const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb://DaviDeveloper:54283841Enzo@cluster0-shard-00-00-ckiuv.mongodb.net:27017,cluster0-shard-00-01-ckiuv.mongodb.net:27017,cluster0-shard-00-02-ckiuv.mongodb.net:27017/week10?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

// metodos http: get(Buscar), post(Criar), put(Editar), delete(Deletar)

// Tipos de parametros:

//Query parans: request.query (Filtros, Ordenação, Paginação, ...)
//Route parans: request.parans (Identificar um recurso na alteração ou remoção)
//Body: resquest.body (Dados para criação ou alteração de registro)

// MongoDB (Banco Não-relacional)

app.listen(3333);