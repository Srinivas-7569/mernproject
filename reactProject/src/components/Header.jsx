function Header() {
  return (
    <header className="bg-black text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center ">
        <h1 className="text-2xl font-bold"> SmartShop</h1>
        <div className="flex gao-11">
          <input
            type="text"
            placeholder="Search..."
            className="border-1  rounded-md px-2 py-1"
          />
          <button className="bg-purple-700 text-white px-4 py-1 rounded-md">
            Search
          </button>
        </div>

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
            <div>
              <div className="h-8 w-8 rounded-full bg-purple-700"></div>
            </div>
          </li>
        </ul>
      </div>
    </header>
  );
}
export default Header;
