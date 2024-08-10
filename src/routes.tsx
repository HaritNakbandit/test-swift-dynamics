import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";


const HomePage = lazy(() => import("../src/pages/home/"));
const Test1Page = lazy(() => import("../src/pages/test1/"));
const Tets2Page = lazy(() => import("../src/pages/test2/"));


const AppRouter = () => {
  return (
    <Suspense fallback={"Loading"}>
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/test1"} element={<Test1Page />} />
        <Route path={"/test2"} element={<Tets2Page />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
