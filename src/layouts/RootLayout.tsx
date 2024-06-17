import ContextProvider from "@context/ContextProvider";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <ContextProvider>
      <Outlet />
    </ContextProvider>
  );
};

export default RootLayout;
