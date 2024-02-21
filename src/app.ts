import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import connectDB from './database';
import { userRouter } from './module/users/routers/userRouters';
import { authRouters } from './module/auth/routes/authRouters';
import { notFoundHandler } from './middleware/errorMiddleware/notFound.handler';
import { errorHandler } from './middleware/errorMiddleware/serverError.handler';
import { postRouter } from './module/post/post/routes/post.routes';

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

if (!process.env.PORT_APP) {
    process.exit(1);
}
const PORT_APP = parseInt(process.env.PORT_APP);
app.listen(3000, () => {
    console.log('listening on http://localhost:' + PORT_APP);
});

// db connection
connectDB.connection.once('open', () => console.log('Koneksi terhubung...'));

//Routes

app.use('/auth', authRouters);
app.use('/post', postRouter);
app.use(errorHandler);
app.use(notFoundHandler);
