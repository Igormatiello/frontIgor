import React, { Suspense, lazy } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoadingBox from "components/LoadingBox";

import NovoEquipamento from "./equipamentoNovo";


const equipamento = lazy(() => import("./equipamento/novo"));

const rotaNovoEquipamento = () => {
  return (
    <Suspense fallback={<LoadingBox />}>
      <BrowserRouter>
        <Routes>
        <Route path="/equipamento/novo" element={<NovoEquipamento />}>
        </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default rotaNovoEquipamento;