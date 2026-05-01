import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const User = sequelize.define("User", {
  name: DataTypes.STRING,
  email: { type: DataTypes.STRING, unique: true },
  password: DataTypes.STRING,
  role: {
    type: DataTypes.ENUM("admin", "manager"),
    defaultValue: "manager",
  },
});

export default User;