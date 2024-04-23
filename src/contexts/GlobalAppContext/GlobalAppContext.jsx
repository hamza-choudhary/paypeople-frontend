import React from "react";
import { AppContext } from "@useContext";

export const GlobalAppContext = ({ children }) => {
  return (
    <AppContext.Provider value="permission">{children}</AppContext.Provider>
  );
};
