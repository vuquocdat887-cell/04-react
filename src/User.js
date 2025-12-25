import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/users");
      console.log(response);
      setProducts(response.data ?? []);
    } catch (e) {
      alert(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "username", headerName: "User name", width: 130 },
    { field: "phone", headerName: "Phone", width: 130 },
    { field: "password", headerName: "Password", width: 130 },
    { field: "email", headerName: "Email", width: 130 },
    {
      field: "fullName",
      headerName: "Full name",
      width: 160,
      valueGetter: (value, row) =>
        `${row.name?.firstname || ""} ${row.name?.lastname || ""}`,
    },
    {
      field: "address",
      headerName: "Address",
      width: 220,
      valueGetter: (value, row) =>
        `${row.address?.street}, ${row.address?.city}`,
    },
  ];

  const paginationModel = { page: 0, pageSize: 5 };

  return (
    <div>
      <h1>Danh sách người dùng</h1>

      <Link to="/">Home</Link>
      <Paper sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={products}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          sx={{ border: 0 }}
        />
      </Paper>
    </div>
  );
};

export default ProductList;
