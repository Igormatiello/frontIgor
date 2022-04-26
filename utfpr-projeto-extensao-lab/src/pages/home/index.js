import React, { Suspense, lazy } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoadingBox from "components/LoadingBox";
import Navbar from "components/Navbar";

const Home1 = lazy(() => import("./Home"));

const Home = () => {
  return (
    <Suspense fallback={<LoadingBox />}>
      <Navbar />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home1 />}>
            <Route path="/home" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default Home;
