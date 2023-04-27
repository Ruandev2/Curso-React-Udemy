//Style
import './App.css';
// 1 config react router
import { BrowserRouter, Routes, Route ,Navigate } from "react-router-dom";

//Compoenents
import Navbar from './components/Navbar';
import SearchForm from './components/SearchForm';

//pages
import Home from "./pages/Home";
import About from "./pages/About";
import Product from './pages/Product';
import Info from './pages/Info';
import NotFound from './pages/NotFound';
import Search from './pages/Search';




function App() {
  return (
    <div className="App">
      <h1>React Roter Dom</h1>
      <BrowserRouter>
        {/* 2-Links React Router*/}
        <Navbar />
        {/*9 -Search*/}
        <SearchForm />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          {/* 4 Rota dinamica*/}
          <Route path="/products/:id" element={<Product />} />
          {/*9 -Search*/}
          <Route path="/search" element={<Search />} />
          {/*10 - Redirect*/}
          <Route path="/company" element={<Navigate to="/about" />} /> 
          {/* 6 - Nested Route*/}
          <Route path="/products/:id/info" element={<Info />} />
          {/* 7 No match router*/}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
