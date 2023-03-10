import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import productService from "../services/productServices";
import catServices from "../services/categoryServices";
export default function EditProductFom() {
  const { id } = useParams();

  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: 0,
    category: "",
  });
  const [categories, setCategories] = useState([]);

  async function getProduct() {
    const rep = await productService.getProductById(id);
    // console.log(rep.data.product);
    setProduct(rep.data.product);
  }
  async function getCategory() {
    const res = await catServices.getAllCategories();
    setCategories(res.data);
  }
  useEffect(() => {
    getProduct();
    getCategory();
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;
    setProduct((prevValue) => {
      // console.log(name + ': ' + value)
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }
  const navigate = useNavigate();

  async function updateProduct(e) {
    navigate("/products");
    await productService.updateProduct(product);
  }
  return (
    <div className="">
      <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
        <div className="mt-5 md:col-span-2 md:mt-0">
          <form onSubmit={() => updateProduct()}>
            <div className="overflow-hidden shadow sm:rounded-md">
              <div className="bg-zinc-200 px-4 py-5 sm:p-6 bg-opacity-40">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Nom
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="given-name"
                      className="shadow block py-2 px-4 w-full rounded"
                      value={product.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Prix
                    </label>
                    <input
                      type="number"
                      name="price"
                      id="price"
                      autoComplete="family-name"
                      className="shadow block py-2 px-4 w-full rounded"
                      value={product.price}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-6">
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Category
                    </label>
                    <select
                      name="category"
                      autoComplete="category"
                      className="mt-1 block w-full uppercase rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      onChange={handleChange}
                      value={product.category}
                    >
                      <option value="" key="0">---</option>
                      {categories.map((e, i) => {
                        return (
                          <option value={e._id} key={i}>
                            {e.name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="col-span-6 sm:col-span-6">
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Description
                    </label>
                    <textarea
                      rows="5"
                      cols="100"
                      name="description"
                      id="description"
                      autoComplete="family-name"
                      className="mt-1 block w-full rounded-md font-medium border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      value={product.description}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
