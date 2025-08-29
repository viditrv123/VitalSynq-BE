// models/index.js - Synchronous version
import { Sequelize } from "sequelize";
import configFile from "../config/config.js";

// Import model initializers directly
import UserModal from "./user.model.js";
// Import other model initializers here
// import ProductModel from "./product.model.js";

const env = process.env.NODE_ENV || "development";
const config = configFile[env];

// Initialize Sequelize
let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

const db = {
  sequelize,
  Sequelize,
};

// Initialize models
db.User = UserModal(sequelize);
console.log(`Loaded model: ${db.User.name}`);

// Initialize other models here
// db.Product = ProductModel(sequelize);

// Set up associations
Object.keys(db).forEach((modelName) => {
  if (db[modelName] && typeof db[modelName].associate === "function") {
    console.log(`Setting up associations for: ${modelName}`);
    db[modelName].associate(db);
  }
});

console.log("All models loaded successfully");

export default db;
