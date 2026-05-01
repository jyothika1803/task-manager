import { Layout, Menu, Button } from "antd";
import {
  DashboardOutlined,
  ProjectOutlined,
  UnorderedListOutlined,
  CalendarOutlined,
  TeamOutlined,
  SettingOutlined,
  BarChartOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;

export default function Sidebar({ role }) {
  
  // 🔄 SWITCH ROLE + LOGOUT
  const handleSwitchRole = () => {
    const newRole = role === "admin" ? "manager" : "admin";

    // 🔥 clear old session
    localStorage.removeItem("role");

    // 🔁 set new role (optional pre-fill for login)
    localStorage.setItem("role", newRole);

    // 🔄 redirect to login page
    window.location.href = "/";
  };

  return (
    <Sider width={230}>
      
      {/* LOGO / TITLE */}
      <div
        style={{
          padding: 20,
          color: "white",
          fontWeight: 600,
          fontSize: 18,
        }}
      >
        👥 Team Task Manager
      </div>

      {/* MENU */}
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        
        <Menu.Item key="1" icon={<DashboardOutlined />}>
          Dashboard
        </Menu.Item>

        <Menu.Item key="2" icon={<ProjectOutlined />}>
          Projects
        </Menu.Item>

        <Menu.Item key="3" icon={<UnorderedListOutlined />}>
          Tasks
        </Menu.Item>

        <Menu.Item key="4" icon={<CalendarOutlined />}>
          Calendar
        </Menu.Item>

        <Menu.Item key="5" icon={<TeamOutlined />}>
          Team Members
        </Menu.Item>

        {/* 🔥 ROLE-BASED ITEM */}
        {role === "admin" ? (
          <Menu.Item key="6" icon={<SettingOutlined />}>
            Roles & Permissions
          </Menu.Item>
        ) : (
          <Menu.Item key="7" icon={<BarChartOutlined />}>
            Reports
          </Menu.Item>
        )}
      </Menu>

      {/* 🔄 SWITCH ROLE BUTTON */}
      <div style={{ padding: 16 }}>
        <Button block type="primary" onClick={handleSwitchRole}>
          Switch to {role === "admin" ? "Manager" : "Admin"}
        </Button>
      </div>
    </Sider>
  );
}