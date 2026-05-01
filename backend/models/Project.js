import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Project = sequelize.define("Project", {
  name: DataTypes.STRING,
  description: DataTypes.TEXT,
});

export default Project;