import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./style.css";

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

  return (
    <div>
      <h1>Danh sách sản phẩm</h1>

      <table style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên sản phẩm</th>
            <th>Giá</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.price}$</td>
            </tr>
          ))}
        </tbody>
      </table>

      <br />
      <hr />
      <Link to="/">Home</Link>
    </div>
  );
};

export default ProductList;
