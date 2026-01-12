import React from "react";
import { Routes, Route } from "react-router-dom";
import EmpanelmentAPCD from "./EmpanelmentAPCD";
import Login from "./Login";
import Dashboard from "./Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<EmpanelmentAPCD />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
