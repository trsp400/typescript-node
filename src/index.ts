import express from 'express';
import {showUser} from './routes';

const app = express();

app.get('/typescript', showUser)

app.listen(3333);

