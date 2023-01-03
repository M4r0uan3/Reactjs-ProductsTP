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
            <div className="overflow-hidden border rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-4 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      ID
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      Nom
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      Description
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      Prix
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                    >
                      Edit
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                    >
                      Delete
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {products?.map((elem, i) => {
                    return (
                      <tr key={elem._id}>
                        <td className="px-4 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                          {i + 1}
                        </td>
                        <td className="px-3 py-4 text-sm text-gray-800 whitespace-nowrap">
                          {elem.name}
                        </td>
                        <td className="px-3 py-4 text-sm text-gray-800 whitespace-nowrap">
                          {elem.description}
                        </td>
                        <td className="px-3 py-4 text-sm text-gray-800 whitespace-nowrap">
                          {elem.price}
                        </td>
                        <td className="px-3 py-4 text-sm font-medium text-right whitespace-nowrap">
                          <Link
                            className="text-green-500 hover:text-green-700"
                            to={`/products/edit/${elem._id}`}
                          >
                            Edit
                          </Link>
                        </td>
                        <td className="px-3 py-4 text-sm font-medium text-right whitespace-nowrap">
                          <button
                            className="text-red-500 hover:text-red-700"
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
