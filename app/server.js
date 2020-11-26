const express = require('express'),
app = express(),
port = process.env.PORT || 3000,
mongoose = require('mongoose'),
bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect(
    "mongodb+srv://root:12345@cluster0.etw2w.mongodb.net/app-agenda-contatos-v2?retryWrites=true&w=majority",
    { useNewUrlParser: true }
)

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Erro na conexao com o MongoDB"));
db.once("open", function () {
    console.log('Conexao com o Banco de dados OK!!!');
});

//mongodb+srv://root:12345@cluster0.etw2w.mongodb.net/app-agenda-contatos-v2?retryWrites=true&w=majority

//configurar o bodyParser (Nosso tradutor)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const userRoute = require('./routes/user/user-route');
userRoute(app);

//configurar a porta na qual o servidor irá responder/ouvir
app.listen(port);
console.log('Servidor NodeJS rodando na porta: '+port);