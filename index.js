import express from "express";
import envVars from "./constants/envVars.js";
import router from "./routes/index.js";
import DatabaseConnext from "./configs/database.js";

const app = express();
app.use(express.json());

const { PORT } = envVars;

app.listen(PORT, async () => {
  const sequelize = new DatabaseConnext().getClient();
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
  console.log(`Server started at http://localhost:${PORT}`);
});

app.use("/", router);
