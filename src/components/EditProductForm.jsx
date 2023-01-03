import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import productService from "../services/productServices";
export default function EditProductFom() {
  const { id } = useParams();

  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: 0,
  });

  async function getProduct() {
    const rep = await productService.getProductById(id);
    console.log(rep.data.product);
    setProduct(rep.data.product);
  }
  useEffect(() => {
    getProduct();
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;
    setProduct((prevValue) => {
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
              <div className="bg-zinc-200 px-4 py-5 sm:p-6">
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
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
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
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      value={product.price}
                      onChange={handleChange}
                    />
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
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
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