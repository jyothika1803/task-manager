import express from "express";
import cors from "cors";
import sequelize from "./config/db.js";
import "./models/index.js";


import authRoutes from "./routes/authRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";
const app = express();

app.use(cors({
  origin: [
    "http://localhost:3000",
    "http://localhost:3001",
    "https://task-manager-pi-gold-66.vercel.app/"
  ],
  credentials: true
}));
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