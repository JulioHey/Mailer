import express, {
    Router,
} from "express";
import cors from 'cors';

import {Mailer} from './controllers/email.controller';


const app = express();
const router = Router();

app.use(express.json())
app.use(cors());

const mailer = new Mailer();

router.get("/embaixadores", mailer.sendEmail);

app.use(router);

app.listen(3333);
