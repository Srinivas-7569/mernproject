import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const CategoryProducts = () => {
  const { name } = useParams();
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${name}`)
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, [name]);

  return (
    <div className="p-6 min-h-screen bg-gradient-to-br from-indigo-700 via-purple-700 to-indigo-800">
      <h2 className="text-3xl text-white font-bold mb-6 capitalize text-center">
        Products in {name}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-2xl shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl relative"
          >
            <div className="w-full h-48 overflow-hidden rounded-md mb-3">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              {product.title}
            </h3>
            <p className="text-gray-600 mb-2">${product.price}</p>
            <button
              onClick={() => navigate(`/product/${product.id}`)}
              className="absolute top-3 right-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs px-3 py-1 rounded-full hover:from-indigo-500 hover:to-purple-500 transition duration-300"
            >
              View
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryProducts;
