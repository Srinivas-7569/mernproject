import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [added, setAdded] = useState(false); // ✅ for animation

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  const handleAddToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const isAlreadyInCart = existingCart.find((item) => item.id === product.id);

    if (!isAlreadyInCart) {
      const updatedCart = [...existingCart, { ...product, quantity: 1 }];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }

    // ✅ Show animated feedback
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const handleViewCart = () => {
    navigate("/cart");
  };

  if (!product)
    return <div className="text-white text-center p-8">Loading...</div>;

  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-indigo-700 via-purple-700 to-indigo-800 text-white">
      <div className="max-w-4xl mx-auto bg-white text-gray-900 rounded-2xl shadow-lg overflow-hidden">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-80 object-cover"
        />
        <div className="p-6">
          <h2 className="text-3xl font-bold mb-2">{product.title}</h2>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="mb-2">
            <strong>Brand:</strong> {product.brand}
          </p>
          <p className="mb-2">
            <strong>Category:</strong> {product.category}
          </p>
          <p className="mb-2">
            <strong>Price:</strong> ${product.price}
          </p>
          <p className="mb-2">
            <strong>Rating:</strong> ⭐ {product.rating}
          </p>
          <p className="mb-2">
            <strong>Stock:</strong> {product.stock}
          </p>

          <div className="flex gap-4 mt-6">
            <button
              onClick={handleAddToCart}
              className={`${
                added ? "bg-green-600" : "bg-blue-600 hover:bg-blue-700"
              } text-white px-4 py-2 rounded-lg transition-all duration-300`}
            >
              {added ? "✓ Added" : "Add to Cart"}
            </button>

            <button
              onClick={handleViewCart}
              className="bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 rounded-lg"
            >
              View Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
