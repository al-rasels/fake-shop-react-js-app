import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Cart from "./pages/cart";
import Header from "./components/header";
import Services from "./pages/services";
import Contact from "./pages/contact";
import Login from "./pages/login";
import Register from "./pages/register";

import Footer from "./components/footer/footer";

function App() {
  return (
    <div className=" bg-blue-50 ">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
