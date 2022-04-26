import React, { Suspense, lazy } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoadingBox from "components/LoadingBox";
import NovoCidade from "./novoCidade";


const cidade = lazy(() => import("./cidade/novo"));

const rotaNovaCidade = () => {
  return (
    <Suspense fallback={<LoadingBox />}>
      <BrowserRouter>
        <Routes>
        <Route path="/cidade/novo" element={<NovoCidade />}>
        </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default rotaNovaCidade;