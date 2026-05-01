import express from "express";
import cors from "cors";
import sequelize from "./config/db.js";
import "./models/index.js";


import authRoutes from "./routes/authRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";
const app = express();

app.use(cors());
app.use(express.json());


app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);
app.get("/", (req, res) => {
  res.send("API running");
});

sequelize.sync({ alter: true }).then(() => {
  console.log("Tables created");

  app.listen(5000, () => {
    console.log("Server running on port 5000");
  });
});