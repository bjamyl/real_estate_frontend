import "../styles/globals.css";
import { gsap } from "gsap";
import { AuthProvider } from "../context/AuthContext";
function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
