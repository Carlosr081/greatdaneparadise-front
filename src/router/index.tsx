import { Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import { map } from "lodash";
import BaseLayout from "./layouts/BaseLayout";
import { routes } from "./routes/routes";
import Head from "../shared/components/Head";
import Error404 from "../pages/error/Error404";
import MainLayout from "./layouts/MainLayout";

interface IRoutes {
  path: string;
  element: () => JSX.Element;
  title: string;
}

export default function RouterApp() {
  return (
    <Routes>
      <Route element={<BaseLayout />}>
        <Route
          path="*"
          element={
            <Suspense>
              <Head title="CENIPA | Página no encontrada" />
              <Error404 />
            </Suspense>
          }
        />
      </Route>

      <Route element={<MainLayout />}>
        {map(routes, (route: IRoutes, index: number) => (
          <Route
            key={index}
            path={route.path}
            element={
              <>
                <Head title={route.title} />
                <route.element />
              </>
            }
          />
        ))}
      </Route>
    </Routes>
  );
}
