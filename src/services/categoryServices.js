import http from "./http";

const getAllCategories = async () => {
  return http.get("/categories");
};

export default getAllCategories;