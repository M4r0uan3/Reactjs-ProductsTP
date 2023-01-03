import http from "./http";
async function getAllProducts() {
  return await http.get("/products");
}
async function getProductById(idP) {
  return await http.get(`/products/${idP}`);
}
async function deleteProduct(idP) {
  return await http.delete(`/products/${idP}`);
}

async function addProduct(product) {
  return await http.post(`/products`, product);
}

async function updateProduct(product) {
  return await http.put(`/products/${product._id}`, product);
}
const productService = {
  getAllProducts,
  getProductById,
  deleteProduct,
  addProduct,
  updateProduct,
};

export default productService;
