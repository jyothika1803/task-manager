import { Task } from "../models/index.js";

// CREATE TASK
export const createTask = async (req, res) => {
  try {
    const { title, description, status, assignedTo } = req.body;

    const task = await Task.create({
      title,
      description,
      status: status || "pending",
      assignedTo,
    });

    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET ALL TASKS
export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE TASK STATUS
export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const task = await Task.findByPk(id);

    if (!task) return res.status(404).json({ message: "Task not found" });

    task.status = status;
    await task.save();

    res.json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 🔥 FINAL STATS FUNCTION (WITH OVERDUE)
export const getTaskStats = async (req, res) => {
  try {
    const tasks = await Task.findAll();
    const today = new Date();

    const stats = {
      total: tasks.length,
      completed: 0,
      pending: 0,
      inProgress: 0,
      overdue: 0,
    };

    tasks.forEach((t) => {
      if (t.status === "completed") stats.completed++;
      else if (t.status === "pending") stats.pending++;
      else if (t.status === "in-progress") stats.inProgress++;

      if (
        t.dueDate &&
        new Date(t.dueDate) < today &&
        t.status !== "completed"
      ) {
        stats.overdue++;
      }
    });

    res.json(stats);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};