import React, { Suspense, lazy } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoadingBox from "components/LoadingBox";
import EditarPerfil from "./perfil";


const perfil = lazy(() => import("./pessoa/novo"));

const rotaPerfil = () => {
  return (
    <Suspense fallback={<LoadingBox />}>
      <BrowserRouter>
        <Routes>
        <Route path="/perfil" element={<EditarPerfil />}>
        </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default rotaPerfil;