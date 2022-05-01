import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home/Home";
import Form from "../components/Form/Form";
import Clients from "../components/Clients";

export default function Rutas() {
  return (
    <Router>
      <Routes>
        <Route element={<Home />} index />
        <Route element={<Form />} path="/create" />
        <Route element={<Clients />} path="/clients" />
      </Routes>
    </Router>
  );
}
