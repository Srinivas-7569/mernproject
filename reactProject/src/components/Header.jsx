import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/category/${searchTerm.toLowerCase()}`);
      setSearchTerm(""); // clear input
    }
  };

  return (
    <header className="bg-black text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">SmartShop</h1>

        <form onSubmit={handleSearch} className="flex gap-2">
          <input
            type="text"
            placeholder="Search category..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border rounded-md px-2 py-1 text-amber-50 border-2"
          />
          <button
            type="submit"
            className="bg-purple-700 text-white px-4 py-1 rounded-md"
          >
            Search
          </button>
        </form>

        <ul className="flex gap-10">
          <li>
            <a href="/" className="hover:text-gray-300">
              Help
            </a>
          </li>
          <li>
            <a href="/login" className="hover:text-gray-300">
              Login
            </a>
          </li>
          <li>
            <div className="h-8 w-8 rounded-full bg-purple-700"></div>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
