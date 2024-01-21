const express = require('express');
const dotenv = require('dotenv');
const cors =  require('cors');
const simpsonsRouter = require('./src/api/routes/simpson.routes');
const ciudadRouter = require('./src/api/routes/ciudad.routes');
const userRouter = require('./src/api/routes/user.routes');
dotenv.config();

const {connect} = require('./src/utils/db');
const { isAuth } = require('./src/middlewares/auth');
const port = process.env.PORT || 7000;

const app = express();
connect();

app.use(cors());
app.use(express.json());

app.use('/simpsons', simpsonsRouter);
app.use('/ciudad', [isAuth], ciudadRouter);
app.use('/user', userRouter);

app.listen(port, () => console.log('listening on port ' + port));