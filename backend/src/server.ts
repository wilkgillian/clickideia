import 'reflect-metadata';
import 'dotenv/config';
import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import './shared/container';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import { router } from './routes';
import swaggerFile from './swagger.json';
import { AppError } from './errors/AppErrors';
import { createConnection } from './shared/infra/typeorm';

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

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      message: err.message,
    });
  }
  return res.status(500).json({
    status: 'error',
    message: `Internal server error -  ${err.message}`,
  });
});

app.listen(5000, () => console.log('Server is running'));
