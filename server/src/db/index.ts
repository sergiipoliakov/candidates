import  { Sequelize } from 'sequelize';

// export default new Sequelize(
//   process.env.DB_MANE as string,
//   process.env.DB_USER as string,
//   process.env.DB_PASSWORD as string,
//   {
//     dialect: 'postgres',
//     port: Number(process.env.DB_PORT),
//     host: process.env.DB_HOST

//   }
// )

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error('DATABASE_URL is not defined');
}

export default new Sequelize(databaseUrl, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  logging: false,
});