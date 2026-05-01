import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  "task_manager", // DB name (your phpMyAdmin DB)
  "root",
  "", // XAMPP default password = empty
  {
    host: "localhost",
    dialect: "mysql",
  }
);

export default sequelize;