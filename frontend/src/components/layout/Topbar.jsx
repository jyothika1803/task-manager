import { Input, Avatar, Badge, Button } from "antd";
import { BellOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

export default function Topbar({ role }) {
  const navigate = useNavigate();

  // 🔐 LOGOUT FUNCTION
  const handleLogout = () => {
    localStorage.removeItem("role");
    navigate("/");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "14px 24px",
        background: "#fff",
        borderBottom: "1px solid #eee",
      }}
    >
      {/* 🔍 SEARCH */}
      <Input
        placeholder="Search projects, tasks, users..."
        style={{
          width: 400,
          borderRadius: 8,
        }}
      />

      {/* 🔔 RIGHT SECTION */}
      <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
        
        {/* 🔔 NOTIFICATION */}
        <Badge count={3}>
          <BellOutlined style={{ fontSize: 20 }} />
        </Badge>

        {/* 👤 AVATAR */}
        <Avatar style={{ background: "#111827" }}>
          {role === "admin" ? "A" : "M"}
        </Avatar>

        {/* 🔥 ROLE INFO */}
        <div>
          <div style={{ fontWeight: 500 }}>
            {role === "admin" ? "Admin" : "Manager"}
          </div>

          <div style={{ fontSize: 12, color: "#6b7280" }}>
            {role === "admin" ? "Administrator" : "Project Manager"}
          </div>
        </div>

        {/* 🚪 LOGOUT BUTTON */}
        <Button danger onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </div>
  );
}