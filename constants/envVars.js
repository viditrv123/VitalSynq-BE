import "dotenv/config";

const PORT = process.env.PORT;
const DB_HOST = process.env.DB_HOST;
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_DIALECT = process.env.DB_DIALECT;
const DB_PORT = process.env.DB_PORT;
const DB_NAME = process.env.DB_NAME;
const PEM_PATH = process.env.PEM_PATH;

const envVars = {
  PORT,
  DB_DIALECT,
  DB_HOST,
  DB_NAME,
  DB_PASSWORD,
  DB_PORT,
  DB_USERNAME,
  PEM_PATH,
};

export default envVars;
