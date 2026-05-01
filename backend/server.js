import express from "express";
import cors from "cors";
import sequelize from "./config/db.js";
import "./models/index.js";

import authRoutes from "./routes/authRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";

const app = express();

// ✅ CORS CONFIG (UPDATED)
app.use(cors({
  origin: [
    "http://localhost:3000",
    "http://localhost:3001",
    "http://localhost:5173",
    "https://task-manager-pi-gold-66.vercel.app"
  ],
  credentials: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

// ✅ Handle preflight requests
app.use(cors());

// Middleware
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("API running");
});

// ✅ IMPORTANT FOR RAILWAY (use dynamic PORT)
const PORT = process.env.PORT || 5000;

sequelize.sync({ alter: true }).then(() => {
  console.log("Tables created");

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});