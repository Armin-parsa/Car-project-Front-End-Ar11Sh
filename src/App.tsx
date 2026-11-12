import { Route, Routes, Navigate } from "react-router-dom";

import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Cars from "./Pages/Cars";
import CarDetails from "./Pages/CarsDetails";
import About from "./Pages/About";

function App() {
  const token = localStorage.getItem("token");

  return (
    <Routes>

      <Route
        path="/"
        element={
          token ? <Navigate to="/home" replace /> : <Login />
        }
      />

      <Route
        path="/home"
        element={
          token ? <Home /> : <Navigate to="/" replace />
        }
      />

      <Route
        path="/cars"
        element={
          token ? <Cars /> : <Navigate to="/" replace />
        }
      />

      <Route
        path="/cars/:id"
        element={
          token ? <CarDetails /> : <Navigate to="/" replace />
        }
      />

      <Route
        path="/about"
        element={
          token ? <About /> : <Navigate to="/" replace />
        }
      />

    </Routes>
  );
}

export default App;