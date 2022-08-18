import "./App.css";
import "./Custom.scss";
import "react-pro-sidebar/dist/css/styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutAdmin from "./components/LayoutAdmin";
import HomePage from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Analytics from "./pages/Analytics.jsx";
import Comment from "./pages/Comment.jsx";
import Product from "./pages/Product.jsx";
import ProductList from "./pages/ProductList.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <LayoutAdmin>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/homepage" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/comment" element={<Comment />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/product" element={<Product />} />
            <Route path="/productList" element={<ProductList />} />
          </Routes>
        </LayoutAdmin>
      </BrowserRouter>
    </div>
  );
}

export default App;
