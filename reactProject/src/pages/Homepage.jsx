import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <main>
        <div className="w-full h-screen bg-gradient-to-r from-indigo-800 to-black flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center">
            Welcome to SmartShop
          </h1>
          <p className="text-lg md:text-xl mb-8 text-center max-w-2xl">
            Discover top categories and best-selling products at unbeatable
            prices.
          </p>
          <button
            onClick={() => navigate("/categories")}
            className="bg-white text-indigo-800 px-6 py-3 rounded-md font-semibold shadow-lg hover:bg-indigo-100 transition"
          >
            Browse Categories
          </button>
        </div>
      </main>
    </>
  );
};

export default Homepage;
