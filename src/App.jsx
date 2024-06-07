import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Navbar } from "@/widgets/layout";
import routes from "@/routes";
import PlantDetailPage from "@/pages/PlantDetailPage";


function App() {
  const { pathname } = useLocation();

  return (
    <>
      {!(pathname == '/sign-in' || pathname == '/sign-up') && (
        <div className="container absolute left-2/4 z-10 mx-auto -translate-x-2/4 p-4">
          <Navbar className="mb-4" routes={routes} />
        </div>
      )
      }
      <Routes>
        {routes.map(
          ({ path, element }, key) =>
            element && <Route key={key} exact path={path} element={element} />
        )}
        <Route path="*" element={<Navigate to="/plants" replace />} />
        <Route path="/plants/:plantName" element={<PlantDetailPage />} />
      </Routes>
    </>
  );
}

export default App;
