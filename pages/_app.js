import "../styles/globals.css";
import { gsap } from "gsap";
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
