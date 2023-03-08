import "../styles/globals.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { AuthProvider } from "../context/AuthContext";
import SearchContext, { SearchProvider } from "../context/SearchContext";
function MyApp({ Component, pageProps }) {
 
  return (
    <AuthProvider>
      <SearchProvider>
        <Component {...pageProps} />
      </SearchProvider>
    </AuthProvider>
  );
}

export default MyApp;
