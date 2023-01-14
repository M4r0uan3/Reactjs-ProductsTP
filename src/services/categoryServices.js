import http from "./http";

const getAllCategories = async () => {
  return await http.get("/categories");
};

async function deleteCategory(idC) {
  return await http.delete(`/categories/${idC}`);
}

const catServices = { getAllCategories, deleteCategory };
export default catServices;

