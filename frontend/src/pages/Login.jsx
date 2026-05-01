import { useState } from "react";
import { Card, Input, Button, Typography } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import API from "../api";

const { Title, Text } = Typography;

export default function Login({ setRole }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(`${API}/api/auth/login`, {
  email,
  password,
});

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.user.role);

      setRole(res.data.user.role);
      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed ❌");
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      }}
    >
      <Card
        style={{
          width: 400,
          borderRadius: 20,
          padding: 10,
          backdropFilter: "blur(10px)",
          background: "rgba(255,255,255,0.95)",
          boxShadow: "0 15px 40px rgba(0,0,0,0.2)",
        }}
      >
        {/* HEADER */}
        <div style={{ textAlign: "center", marginBottom: 25 }}>
          <Title level={3} style={{ marginBottom: 5 }}>
            👥 Welcome Back
          </Title>

          <Text type="secondary">
            Manage your team & tasks effortlessly
          </Text>
        </div>

        {/* EMAIL */}
        <Input
          size="large"
          placeholder="Enter your email"
          prefix={<MailOutlined />}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            marginBottom: 15,
            borderRadius: 10,
          }}
        />

        {/* PASSWORD */}
        <Input.Password
          size="large"
          placeholder="Enter your password"
          prefix={<LockOutlined />}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            marginBottom: 20,
            borderRadius: 10,
          }}
        />

        {/* BUTTON */}
        <Button
          type="primary"
          block
          size="large"
          onClick={handleLogin}
          style={{
            borderRadius: 10,
            height: 45,
            background:
              "linear-gradient(90deg, #667eea, #764ba2)",
            border: "none",
            fontWeight: 500,
          }}
        >
          Login
        </Button>

        {/* FOOTER */}
        <div style={{ textAlign: "center", marginTop: 15 }}>
          <Text type="secondary" style={{ fontSize: 12 }}>
            Built for teams • Admin & Manager access
          </Text>
        </div>
      </Card>
    </div>
  );
}