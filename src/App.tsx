import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { RootLayout } from "./layouts";
import { lazy } from "react";
import { Toaster } from "react-hot-toast";
import ErrorFallback from "@components/ErrorFallback";

const Homepage = lazy(() => import("./pages/HomePage"));

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<Homepage />} />
    </Route>,
  ])
);

const App = () => {
  return (
    <ErrorFallback>
      <RouterProvider router={router} />
      <Toaster />
    </ErrorFallback>
  );
};

export default App;
