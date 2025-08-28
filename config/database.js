import Sequelize from "sequelize";
import config from "./config.js";
import envVars from "../constants/envVars.js";

class DatabaseConnext {
  static instance = null;

  constructor() {
    if (DatabaseConnext.instance) {
      return DatabaseConnext.instance;
    }

    console.log(config[envVars.ENV]);

    this.database = new Sequelize(config[envVars.ENV]);
    DatabaseConnext.instance = this;
  }

  getClient() {
    return this.database;
  }
}

export default DatabaseConnext;
