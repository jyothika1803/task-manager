import { Card } from "antd";

const stats = [
  { title: "Total Projects", value: 12, color: "#3b82f6" },
  { title: "Total Tasks", value: 58, color: "#22c55e" },
  { title: "In Progress", value: 23, color: "#f59e0b" },
  { title: "Overdue Tasks", value: 7, color: "#ef4444" },
  { title: "Completed Tasks", value: 28, color: "#8b5cf6" },
];

export default function StatsCards() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: 20,
        marginTop: 20,
      }}
    >
      {stats.map((item, i) => (
        <Card
          key={i}
          style={{
            borderRadius: 16,
            boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
            border: "none",
          }}
        >
          <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
            
            {/* ICON CIRCLE */}
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                background: item.color + "20",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: item.color,
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              ●
            </div>

            {/* TEXT */}
            <div>
              <div style={{ color: "#6b7280", fontSize: 13 }}>
                {item.title}
              </div>
              <div style={{ fontSize: 24, fontWeight: 700 }}>
                {item.value}
              </div>
            </div>

          </div>
        </Card>
      ))}
    </div>
  );
}