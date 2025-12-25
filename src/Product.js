import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
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
      { field: "title", headerName: "Title", width: 130 },
      { field: "price", headerName: "Price", width: 130 },
      { field: "category", headerName: "Category", width: 130 },
      { field: "image", headerName: "Image", width: 130 },
      {
        field: "rating",
        headerName: "Rating",
        width: 160,
        valueGetter: (value, row) =>
          `${row.rating?.rate || ""}, ${row.rating?.count || ""}`,
      },
    ];

    const paginationModel = { page: 0, pageSize: 5 };

  return (
    <div>
      <h1>Danh sách sản phẩm</h1>

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

      <br />
      <hr />
      <Link to="/">Home</Link>
    </div>
  );
};

export default ProductList;
