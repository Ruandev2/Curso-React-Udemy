import { BrowserRouter, Routes, Route, } from "react-router-dom";
//Style
import './App.css';
//Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";

//Componentes
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <h1>React Context</h1>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/*1 - Rotas */}
          <Route path="/" element={<Home />} />
          <Route path="products" element={<Product />} />
          <Route path="about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
