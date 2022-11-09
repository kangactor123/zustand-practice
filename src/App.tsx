import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ToDo from "./page/ToDo/List";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ToDo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
