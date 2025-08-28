import dotenv from "dotenv";
import envVars from "../constants/envVars.js";
dotenv.config();

export default {
  development: {
    username: "postgres",
    password: "postgres",
    database: "vitalsynq",
    host: "localhost",
    dialect: envVars.DB_DIALECT,
    dialectOptions: {},
  },
  test: {
    username: envVars.DB_USERNAME || "postgres",
    password: envVars.DB_PASSWORD || "postgres",
    database: envVars.DB_NAME || "vitalsynq_test",
    host: envVars.DB_HOST || "127.0.0.1",
    dialect: envVars.DB_DIALECT,
  },
  production: {
    username: envVars.DB_USERNAME,
    password: envVars.DB_PASSWORD,
    database: envVars.DB_NAME,
    host: envVars.DB_HOST,
    dialect: envVars.DB_DIALECT,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false, // RDS friendly, use cert for stronger security
      },
    },
  },
};
