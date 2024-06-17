import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { RootLayout } from "./layouts";
import { lazy } from "react";

const Homepage = lazy(() => import("./pages/HomePage"));

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<Homepage />} />
    </Route>,
  ])
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
