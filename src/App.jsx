import "./App.css";
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navigation from "./components/Navigation/Navigation";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const CampersCatalogPage = lazy(() =>
  import("./pages/CampersCatalogPage/CampersCatalogPage")
);
const CapmerDetailsPage = lazy(() =>
  import("./pages/CamperDetailsPage/CamperDetailsPage")
);
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

function App() {
  return (
    <>
      <Navigation />
      <Suspense>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/campers" element={<CampersCatalogPage />} />
          <Route path="/campers/:id" element={<CapmerDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
