import "./App.css";
// router
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
//Hooks
import { useAuth } from "./hooks/useAuth";
// components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// pages
import Home from "./pages/Auth/Home/Home";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
function App(){
  const {auth,loading} = useAuth();

  if(loading){
    return <p>Carregando...</p>
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route
             path="/" 
             element={auth ? <Home />:<Navigate to="login"/>}
             />
            <Route 
            path="/login"
             element={!auth ? <Login /> : <Navigate to="/"/>}
             />
            <Route 
            path="/register"
             element={!auth ? <Register /> : <Navigate to="/"/>}
             />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
