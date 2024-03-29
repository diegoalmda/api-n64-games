const express = require('express');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');

dotenv.config();

const connect = require('./models/index');
const gamesRouter = require('./routes/games');

const app = express();
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cookieParser());
connect();

app.get('/', (req, res) => {
    return res.json({message: 'API is OK!!'});
});

app.use('/games', gamesRouter);

app.listen(3000, () => {
    console.log('Api rodando na porta 3000');
})