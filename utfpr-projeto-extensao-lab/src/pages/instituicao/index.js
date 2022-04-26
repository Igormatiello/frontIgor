import React, { Suspense, lazy } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoadingBox from "components/LoadingBox";

import novoForm from "./novoForm";

const instituicaoNova = lazy(() => import("./instituicao/novo"));

const rotaInstituicaoNovo = () => {
  return (
    <Suspense fallback={<LoadingBox />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<novoForm />}>
            <Route path="instituicao/novo" element={<novoForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default rotaInstituicaoNovo;