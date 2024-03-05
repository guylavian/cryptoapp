import express from 'express';
import userRouter from './routers/users'
import path, { dirname } from 'path';

const server = express()

server.set('views', path.resolve(__dirname, 'views'));
server.set('view engine', 'ejs');

server.use('/users', userRouter);

server.listen (8080, () => {
    console.log('started')
})