import { Layout, Button } from "antd";
import Sidebar from "../components/layout/Sidebar";
import Topbar from "../components/layout/Topbar";
import StatsCards from "../components/dashboard/StatsCards";
import ChartsSection from "../components/dashboard/ChartsSection";
import TasksTable from "../components/dashboard/TasksTable";
import RightPanel from "../components/dashboard/RightPanel";
import TasksChart from "../components/dashboard/TasksChart";

const { Content } = Layout;

export default function Dashboard({ role, setRole }) {
  return (
    <Layout
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f5f7fa, #e4e8f0)",
      }}
    >
      {/* SIDEBAR */}
      <Sidebar role={role} setRole={setRole} />

      <Layout>
        {/* TOPBAR */}
        <Topbar role={role} />

        <Content
          style={{
            padding: "24px 28px",
            background: "transparent",
          }}
        >
          {/* HEADER */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 20,
            }}
          >
            <div>
              <h2 style={{ marginBottom: 4 }}>
                Welcome back, {role === "admin" ? "Admin" : "Manager"} 👋
              </h2>

              <p style={{ color: "#6b7280", margin: 0 }}>
                {role === "admin"
                  ? "You're in control — manage tasks, teams, and projects smoothly."
                  : "Stay on top of your tasks and track progress effortlessly."}
              </p>
            </div>

            {role === "admin" ? (
              <Button type="primary">+ New Project</Button>
            ) : (
              <Button>View Reports</Button>
            )}
          </div>

          {/* STATS */}
          <StatsCards />

          {/* 🔥 FIXED CHART SECTION */}
          <div
            style={{
              marginTop: 24,
              display: "grid",
              gridTemplateColumns: "2fr 1fr",
              gap: 20,
            }}
          >
            {/* BIG CHART */}
            <div
              style={{
                background: "#fff",
                padding: 20,
                borderRadius: 16,
                boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
                minHeight: 300,
              }}
            >
              <ChartsSection />
            </div>

            {/* PIE CHART */}
            <div
              style={{
                background: "#fff",
                padding: 20,
                borderRadius: 16,
                boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: 300,
              }}
            >
              <TasksChart />
            </div>
          </div>

          {/* LOWER SECTION */}
          <div
            style={{
              display: "flex",
              gap: 20,
              marginTop: 24,
              alignItems: "flex-start",
              flexWrap: "wrap",
            }}
          >
            {/* TASK TABLE */}
            <div style={{ flex: 3, minWidth: 500 }}>
              <TasksTable />
            </div>

            {/* RIGHT PANEL */}
            <div style={{ flex: 1, minWidth: 280 }}>
              <RightPanel />
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}