import Sequelize from "sequelize";
import fs from "fs";
import envVars from "../constants/envVars.js";

class DatabaseConnext {
  static instance = null;

  constructor() {
    if (DatabaseConnext.instance) {
      return DatabaseConnext.instance;
    }

    this.database = new Sequelize({
      database: envVars.DB_NAME,
      username: envVars.DB_USERNAME,
      password: envVars.DB_PASSWORD,
      host: envVars.DB_HOST,
      port: envVars.DB_PORT,
      dialect: envVars.DB_DIALECT,
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false,
          ca: fs.readFileSync(envVars.PEM_PATH).toString(),
        },
      },
    });
    DatabaseConnext.instance = this;
  }

  getClient() {
    return this.database;
  }
}

export default DatabaseConnext;
