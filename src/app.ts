import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import router from './app/routes';

const app:Application = express();

app.use(cors());
app.use(cookieParser());

// parser
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/', (req:Request, res:Response)=>{
    res.send({
        Message:"Smart mill server is running..."
    })
});

app.use('/api',router);

export default app;