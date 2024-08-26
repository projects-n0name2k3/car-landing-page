import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeVinfast from "./pages/HomeVinfast";
import VehiclePage from "./pages/VehiclePage";
const App = () => {
  return (
    <div className="min-h-screen mx-auto flex flex-col">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vinfast" element={<HomeVinfast />} />
          <Route path="contact" element={<Home />} />
          <Route path="vehicles/:brand" element={<VehiclePage />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
