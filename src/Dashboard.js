import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductManager from "./Product";
import UserManager from "./User";

const Dashboard = () => {
  const [active, setActive] = useState("product");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLogin");
    navigate("/login");
  };

  return (
    <div>
      <header style={{ marginBottom: 20 }}>
        <button onClick={() => setActive("product")}>Quản lý sản phẩm</button>

        <button onClick={() => setActive("user")}>Quản lý users</button>

        <button onClick={handleLogout}>Logout</button>
      </header>

      {active === "product" && <ProductManager />}
      {active === "user" && <UserManager />}
    </div>
  );
};

export default Dashboard;
