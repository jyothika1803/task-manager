import express from "express";
import {
  createTask,
  getTasks,
  updateTask,
  getTaskStats
} from "../controllers/taskController.js";

import { verifyToken, isAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

// CREATE TASK
router.post("/", verifyToken, isAdmin, createTask);

// GET ALL TASKS
router.get("/", verifyToken, getTasks);

// UPDATE TASK
router.put("/:id", verifyToken, isAdmin, updateTask);

// GET STATS
router.get("/stats", verifyToken, getTaskStats);

export default router;