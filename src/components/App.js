import "../styles/App.css";
import Nav from "./Nav";
import Home from "./Home";
import ProductList from "./ProductList";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import AddProduct from "./AddProductFom";
import EditProductForm from "./EditProductForm";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/add" element={<AddProduct />} />
          <Route path="/products/edit/:id" element={<EditProductForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
