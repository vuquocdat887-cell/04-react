import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductManager from "./Product";
import UserManager from "./User";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

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
        <Box sx={{ "& button": { m: 1 } }}>
          <div>
            <Button
              variant="contained"
              size="small"
              onClick={() => setActive("product")}
            >
              Quản lý sản phẩm
            </Button>
            <Button
              variant="contained"
              size="medium"
              onClick={() => setActive("user")}
            >
              Quản lý users
            </Button>
            <Button variant="contained" size="large" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        </Box>
      </header>

      {active === "product" && <ProductManager />}
      {active === "user" && <UserManager />}
    </div>
  );
};

export default Dashboard;
