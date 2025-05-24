import "./App.css";
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navigation from "./components/Navigation/Navigation";
import Loader from "./components/Loader/Loader.jsx";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const CampersCatalogPage = lazy(() =>
  import("./pages/CampersCatalogPage/CampersCatalogPage")
);
const CamperDetailsPage = lazy(() =>
  import("./pages/CamperDetailsPage/CamperDetailsPage.jsx")
);
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));
const CamperFeatures = lazy(() =>
  import("./components/CamperFeatures/CamperFeatures.jsx")
);
const CamperReviews = lazy(() =>
  import("./components/CamperReviews/CamperReviews.jsx")
);

function App() {
  return (
    <>
      <Navigation />
      <Suspense>
        <Routes fallback={<Loader />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/campers" element={<CampersCatalogPage />} />
          <Route path="/campers/:id" element={<CamperDetailsPage />}>
            <Route path="features" element={<CamperFeatures />} />
            <Route path="reviews" element={<CamperReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
