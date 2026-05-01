import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Task = sequelize.define("Task", {
  title: DataTypes.STRING,
  status: {
    type: DataTypes.ENUM("todo", "in-progress", "review", "done"),
    defaultValue: "todo",
  },
  dueDate: DataTypes.DATE,
});

export default Task;