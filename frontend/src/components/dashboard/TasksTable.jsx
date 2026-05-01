import { useEffect, useState } from "react";
import axios from "axios";

export default function TasksTable() {
  const [tasks, setTasks] = useState([]);

  // FETCH TASKS
  const fetchTasks = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/tasks");
      setTasks(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // 🔥 UPDATE STATUS
  const handleStatusChange = async (id, newStatus) => {
    try {
      await axios.put(`http://localhost:5000/api/tasks/${id}`, {
        status: newStatus,
      });

      // refresh tasks
      fetchTasks();
    } catch (err) {
      console.error("Update failed", err);
    }
  };

  return (
    <div style={{ background: "#fff", padding: 20, borderRadius: 10 }}>
      <h3>Tasks</h3>

      <table style={{ width: "100%", marginTop: 10 }}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.title}</td>

              <td>
                {/* 🔥 DROPDOWN */}
                <select
                  value={task.status}
                  onChange={(e) =>
                    handleStatusChange(task.id, e.target.value)
                  }
                >
                  <option value="pending">Pending</option>
                  <option value="in-progress">In Progress</option>
                  <option value="completed">Completed</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}