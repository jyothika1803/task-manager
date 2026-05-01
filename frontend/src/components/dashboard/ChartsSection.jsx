import { Card, Progress } from "antd";
import {
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

const pieData = [
  { name: "Todo", value: 19 },
  { name: "In Progress", value: 23 },
  { name: "Review", value: 9 },
  { name: "Done", value: 7 },
];

const COLORS = ["#3b82f6", "#f59e0b", "#8b5cf6", "#22c55e"];

const lineData = [
  { name: "May 5", created: 10, completed: 5 },
  { name: "May 12", created: 20, completed: 12 },
  { name: "May 19", created: 30, completed: 18 },
  { name: "May 26", created: 35, completed: 25 },
];

export default function ChartsSection() {
  return (
    <div
      style={{
        display: "flex",
        gap: 20,
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      {/* DONUT */}
      <Card
        title="Tasks by Status"
        style={{
          flex: 1,
          minWidth: 250,
          borderRadius: 16,
          boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
        }}
      >
        <PieChart width={220} height={220}>
          <Pie
            data={pieData}
            innerRadius={50}
            outerRadius={70}
            dataKey="value"
          >
            {pieData.map((_, i) => (
              <Cell key={i} fill={COLORS[i]} />
            ))}
          </Pie>
          <Legend />
        </PieChart>
      </Card>

      {/* LINE */}
      <Card
        title="Tasks Over Time"
        style={{
          flex: 1,
          minWidth: 250,
          borderRadius: 16,
          boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
        }}
      >
        <LineChart width={260} height={180} data={lineData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line dataKey="created" stroke="#3b82f6" strokeWidth={2} />
          <Line dataKey="completed" stroke="#22c55e" strokeWidth={2} />
        </LineChart>
      </Card>

      {/* PROGRESS */}
      <Card
        title="Top Projects"
        style={{
          flex: 1,
          minWidth: 250,
          borderRadius: 16,
          boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
        }}
      >
        <p>Website Redesign</p>
        <Progress percent={75} strokeColor="#6366f1" />
        <p style={{ marginTop: 10 }}>Mobile App</p>
        <Progress percent={60} strokeColor="#22c55e" />
      </Card>
    </div>
  );
}