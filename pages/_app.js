import "../styles/globals.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { AuthProvider } from "../context/AuthContext";
import SearchContext, { SearchProvider } from "../context/SearchContext";
function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setLoading(true);
    });

    router.events.on("routeChangeComplete", () => {
      setLoading(false);
    });

    router.events.on("routeChangeError", () => {
      setLoading(false);
    });
  }, [router]);
  return (
    <AuthProvider>
      <SearchProvider>
        <Component {...pageProps} />
      </SearchProvider>
    </AuthProvider>
  );
}

export default MyApp;
