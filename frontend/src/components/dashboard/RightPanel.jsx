import { Card } from "antd";

export default function RightPanel() {
  return (
    <div>
      <Card title="Upcoming Deadlines" style={{ marginBottom: 16 }}>
        <p>🔴 Design landing page</p>
        <p>🟡 Implement auth</p>
      </Card>

      <Card title="Team Members">
        <p>Sarah - UI Designer</p>
        <p>James - Backend</p>
      </Card>
    </div>
  );
}