//  config react router
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
//css
import './App.css';
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import { HookUseContext } from "./components/HookUseContext";
function App() {
  return (
    <div className="App">
      <HookUseContext>
        <BrowserRouter>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </HookUseContext>
    </div>
  );
}

export default App;
