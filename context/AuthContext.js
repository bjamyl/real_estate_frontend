import { useState, createContext, useEffect } from "react";
import jwtDecode from "jwt-decode";
import { useRouter } from "next/router";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const router = useRouter();
  let [user, setUser] = useState(null);
  let [authTokens, setAuthTokens] = useState(null);
  console.log(authTokens);

  useEffect(() => {
    setAuthTokens(
      localStorage.getItem("authTokens")
        ? JSON.parse(localStorage.getItem("authTokens"))
        : null
    );
    setUser(
      localStorage.getItem("authTokens")
        ? jwtDecode(localStorage.getItem("authTokens"))
        : null
    );
  }, []);

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
      setAuthTokens(data);
      setUser(jwtDecode(data.access));
      localStorage.setItem("authTokens", JSON.stringify(data));
      router.push("/");
    } else {
      alert("Something went wrong");
    }
  };

  const logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("authTokens");
    router.push("/signIn");
  };

  const updateToken = async () => {
    let res = await fetch("http://127.0.0.1:8000/api/token/refresh/", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        'refresh':authTokens.refresh
      }),
    });

    let data = await res.json()
    if(res.status === 200){
      
    }
  };

  let contextData = {
    user,
    loginUser,
    logoutUser,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
