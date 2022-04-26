import React, { Suspense, lazy } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoadingBox from "components/LoadingBox";


const prgEnsino = lazy(() => import("./prgEnsino/novo"));

const rotaPrgEnsinoNovo = () => {
  return (
    <Suspense fallback={<LoadingBox />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<novoForm />}>
            <Route path="prgEnsino/novo" element={<novoForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default rotaPrgEnsinoNovo;