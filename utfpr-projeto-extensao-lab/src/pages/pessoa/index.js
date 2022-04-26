import React, { Suspense, lazy } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoadingBox from "components/LoadingBox";
import NovoCidade from "./novoCidade";


const pessoa = lazy(() => import("./pessoa/novo"));

const rotaNovaPessoa = () => {
  return (
    <Suspense fallback={<LoadingBox />}>
      <BrowserRouter>
        <Routes>
        <Route path="/pessoa/novo" element={<NovoCidade />}>
        </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default rotaNovaPessoa;