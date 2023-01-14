import { useState, useEffect } from "react";
import catServices from "../services/categoryServices";
import { Link } from "react-router-dom";

export default function CategoryList() {
  const [categories, setCategories] = useState([]);
  async function getCategory() {
    const res = await catServices.getAllCategories();
    setCategories(res.data);
  }
  useEffect(() => {
    getCategory();
  }, []);
  async function deleteCat(id) {
    await catServices.deleteCategory(id);
    getCategory();
  }
  return (
    <div>
      <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
            <div className="overflow-auto shadow rounded-lg">
              <table className="w-full">
                <thead className="bg-gray-50 border-b-2 border-gray-200">
                  <tr>
                    <th
                      scope="col"
                      className="w-10 p-3 text-sm font-semibold tracking-wide text-center text-gray-500"
                    >
                      ID
                    </th>
                    <th
                      scope="col"
                      className="w-20 p-3 text-sm font-semibold tracking-wide text-center text-gray-500"
                    >
                      Nom
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
                  {categories.map((e, i) => {
                    return (
                      <tr key={e._id} className="bg-white">
                        <td className="p-3 text-sm text-gray-700 text-center">
                          <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-blue-800 bg-blue-200 rounded-lg bg-opacity-50">
                            {e._id}
                          </span>
                        </td>
                        <td className="p-3 text-sm text-gray-700 text-center">
                          <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-50">
                            {e.name}
                          </span>
                        </td>
                        <td className="p-3 text-sm text-gray-700">
                          <Link
                            className="p-1.5 text-green-500 hover:text-green-800 font-medium text-xs uppercase tracking-wider"
                            to={`/categories/edit/${e._id}`}
                          >
                            Edit
                          </Link>
                        </td>
                        <td>
                          <button
                            className="p-1.5 text-red-500 hover:text-red-800 font-medium text-xs uppercase tracking-wider"
                            onClick={() => deleteCat(e._id)}
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
      </main>
    </div>
  );
}
