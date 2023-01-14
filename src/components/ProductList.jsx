import React, { useState, useEffect } from "react";
import productService from "../services/productServices";
import { Link } from "react-router-dom";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  async function getAllProducts() {
    try {
      const result = await productService.getAllProducts();
      setProducts(result.data.products);
    } catch (error) {
      return error;
    }
  }
  async function deleteProduct(id){
    await productService.deleteProduct(id);
    getAllProducts()
}
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <div>
      <div className="flex flex-col m-6">
        <div className="overflow-x-auto">
          <div className="p-1.5 w-full inline-block align-middle">
            <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl mb-20">Products</h1>
            <div className="overflow-auto shadow rounded-lg">
              <table className="w-full">
                <thead className="bg-gray-50 border-b-2 border-gray-200">
                  <tr>
                    <th
                      scope="col"
                      className="w-10 p-3 text-sm font-semibold tracking-wide text-left text-gray-500"
                    >
                      ID
                    </th>
                    <th
                      scope="col"
                      className="w-30 p-3 text-sm font-semibold tracking-wide text-left text-gray-500"
                    >
                      Nom
                    </th>
                    <th
                      scope="col"
                      className="p-3 text-sm font-semibold tracking-wide text-left text-gray-500"
                    >
                      Description
                    </th>
                    <th
                      scope="col"
                      className="w-24 p-3 text-sm font-semibold tracking-wide text-left text-gray-500"
                    >
                      Prix
                    </th>
                    <th
                      scope="col"
                      className="w-24 p-3 text-sm font-semibold tracking-wide text-left text-gray-500"
                    >
                      Category
                    </th>
                    <th
                      scope="col"
                      className="w-20 p-3 text-sm font-semibold tracking-wide text-left text-gray-500"
                    >
                      Edit
                    </th>
                    <th
                      scope="col"
                      className="w-20 p-3 text-sm font-semibold tracking-wide text-left text-gray-500"
                    >
                      Delete
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {products?.map((elem, i) => {
                    // console.log(elem)
                    return (
                      <tr key={elem._id} className="bg-white">
                        <td className="p-3 text-sm text-gray-700">
                          {i + 1}
                        </td>
                        <td className="p-3 text-sm text-gray-700">
                          {elem.name}
                        </td>
                        <td className="p-3 text-sm text-gray-700">
                          {elem.description}
                        </td>
                        <td className="p-3 text-sm text-gray-700">
                        <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">{elem.price} DH</span>
                        </td>
                        <td className="p-3 text-sm text-gray-700">
                          <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-50">{elem.category.name}</span>
                        </td>
                        <td className="p-3 text-sm text-gray-700">
                          <Link
                            className="p-1.5 text-green-500 hover:text-green-800 font-medium text-xs uppercase tracking-wider"
                            to={`/products/edit/${elem._id}`}
                          >
                            Edit
                          </Link>
                        </td>
                        <td>
                          <button
                            className="p-1.5 text-red-500 hover:text-red-800 font-medium text-xs uppercase tracking-wider"
                            onClick={()=>deleteProduct(elem._id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
