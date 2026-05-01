import { Card } from "antd";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { taskStats } from "../../data/dummyData";

const COLORS = ["#22c55e", "#3b82f6", "#f59e0b"];

export default function TasksChart() {
  const data = [
    { name: "Completed", value: taskStats.completed },
    { name: "In Progress", value: taskStats.inProgress },
    { name: "Pending", value: taskStats.pending },
  ];

  return (
    <Card
      title="Task Distribution"
      style={{
        borderRadius: 16,
        boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
        height: "100%",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <PieChart width={260} height={240}>
          <Pie
            data={data}
            innerRadius={60}
            outerRadius={90}
            dataKey="value"
          >
            {data.map((_, i) => (
              <Cell key={i} fill={COLORS[i]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>
    </Card>
  );
}