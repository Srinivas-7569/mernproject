// src/pages/Categories.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-white py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-10">
          Explore Our Product Categories
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => navigate(`/category/${cat.slug || cat}`)}
              className="bg-indigo-700 hover:bg-indigo-500 transition duration-300 ease-in-out text-white px-4 py-3 rounded-lg shadow-lg text-sm font-semibold tracking-wide uppercase"
            >
              {cat.name || cat}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Categories;