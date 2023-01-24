import 'reflect-metadata';
import 'dotenv/config';
import '../../container';
import express from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import { router } from './routes';
import swaggerFile from '../../../swagger.json';
import { createConnection } from '../typeorm';

createConnection('db_clickideia');

const app = express();

app.use(express.json());
app.use(
  cors({
    allowedHeaders: '*',
    methods: '*',
    origin: '*',
  }),
);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

app.listen(5000, () => console.log('Server is running'));
