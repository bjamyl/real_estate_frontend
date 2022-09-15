import { useState, createContext, useEffect } from "react";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  <AuthContext.Provider value="">{children}</AuthContext.Provider>;
};
