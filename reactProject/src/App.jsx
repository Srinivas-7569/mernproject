 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Categories from "./pages/Categories";
import CategoryProducts from "./pages/CategoryProducts";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/category/:name" element={<CategoryProducts />} />{" "}
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
