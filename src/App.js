import React from "react";
import Pagina1 from "./Pagina1.js";
import Pagina2 from "./Pagina2.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Pagina1 />}></Route>
          <Route path="pagina1" element={<Pagina1 />} />
          <Route path="pagina2" element={<Pagina2 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
