import { useState, createContext, useEffect } from "react";
import jwtDecode from "jwt-decode";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { setCookie, getCookie } from "cookies-next";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }, req) => {
  const router = useRouter();

  // Next cookie state declarations
  // let [authCookies, setAuthCookies] = useState(
  //   Cookies.get("authTokens") ? JSON.parse(Cookies.get("authTokens")) : null
  // );
  // let [cookieUser, setCookieUser] = useState(
  //   Cookies.get("authTokens") ? jwtDecode(Cookies.get("authTokens")) : null
  // );

  let [user, setUser] = useState(
    Cookies.get("authTokens") ? jwtDecode(Cookies.get("authTokens")) : null
  );
  let [authTokens, setAuthTokens] = useState(
    Cookies.get("authTokens") ? JSON.parse(Cookies.get("authTokens")) : null
  );

  const [access, setAccess] = useState(
    Cookies.get("access") ? JSON.parse(Cookies.get("access")) : null
  );
  let [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setAuthTokens(
  //     localStorage.getItem("authTokens")
  //       ? JSON.parse(localStorage.getItem("authTokens"))
  //       : null
  //   );
  //   setUser(
  //     localStorage.getItem("authTokens")
  //       ? jwtDecode(localStorage.getItem("authTokens"))
  //       : null
  //   );
  // }, []);

  //Logging in user function: Takes the username and password and sends that data to the token obtain endpoint
  let loginUser = async (e) => {
    e.preventDefault();
    alert("Submitted");
    let res = await fetch("http://127.0.0.1:8000/api/token/", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        username: e.target.username.value,
        password: e.target.password.value,
      }),
    });

    let data = await res.json();
    if (res.status === 200) {
      setAccess(data.access);
      setAuthTokens(data);
      setUser(jwtDecode(data.access));
      Cookies.set("authTokens", JSON.stringify(data));
      Cookies.set("access", JSON.stringify(data.access));
      // setAuthCookies(data);
      // localStorage.setItem("authTokens", JSON.stringify(data));
      // Setting Next cookie
      router.push("/");
    } else {
      alert("Something went wrong");
    }
  };

  // Defining function to logout users
  const logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    setAccess(null);
    Cookies.remove("authTokens");
    Cookies.remove("access");
    // setAuthCookies(null);
    // localStorage.removeItem("authTokens");
    router.push("/");
  };

  // Updating token function by sending refresh token to refresh token endpoint
  const updateToken = async () => {
    console.log("Update token called!!");
    console.log(authTokens);
    console.log(access);
    let res = await fetch("http://127.0.0.1:8000/api/token/refresh/", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        refresh: authTokens?.refresh,
      }),
    });

    let data = await res.json();
    if (res.status === 200) {
      setAuthTokens(data);
      setAccess(data.access);

      setUser(jwtDecode(data.access));
      Cookies.set("authTokens", JSON.stringify(data));
      Cookies.set("access", JSON.stringify(data.access));
      // localStorage.setItem("authTokens", JSON.stringify(data));
      // setAuthCookies(data);
      // Setting Next cookie
      // setCookie("newTokens", JSON.stringify(data));
    } else {
      //If refresh token fails to provide a new updated access token, log out the user
      logoutUser();
    }
    if (loading) {
      setLoading(false);
    }
  };

  //Context data object with variables above and functions below to be passed as a value prop in the AuthContext Provider
  let contextData = {
    user,
    authTokens,
    loginUser,
    logoutUser,
  };

  //Life cycle method to call update token every 4 minutes
  useEffect(() => {
    if (loading) {
      updateToken();
    }
    let fourMin = 1000 * 60 * 1;
    let interval = setInterval(() => {
      if (authTokens) {
        updateToken();
      }
    }, fourMin);
    return () => clearInterval(interval);
  }, [authTokens, loading]);

  return (
    <AuthContext.Provider value={contextData}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};
