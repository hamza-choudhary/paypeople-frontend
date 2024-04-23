import React from "react";
import { RouterProvider } from "react-router-dom";
import { GlobalAppContext } from "@useContext";
import { router } from "@routes";

const App = () => {
  return (
    <GlobalAppContext>
      <RouterProvider router={router} />
    </GlobalAppContext>
  );
};

export default App;
