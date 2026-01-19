import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import 'dotenv/config';
import routes from './src/routes/candidate.routes'
import errorMiddleware from './src/middlewares/error.middleware';

import sequelize from './src/db';
const PORT = process.env.PORT || 8000


const app = express();

app.use(cookieParser());

app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:4173'],
  credentials: true,
}));

app.use(express.json());

app.use('/api', routes);

app.use(errorMiddleware);

const start = async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ DB connected successfully');
    await sequelize.sync({ alter: true }); 

    app.listen(PORT, () => {
      console.log(`Example app listening on port ${PORT}`)
    })
  } catch (error) {
    console.log(error)
    console.error('❌ Unable to connect to DB:', error);
  }
}

start()


