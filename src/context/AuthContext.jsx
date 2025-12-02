import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [token, setToken] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // SAFE LOAD from localStorage
  useEffect(() => {
    try {
      const savedToken = localStorage.getItem("a5x_token");
      const savedUser = localStorage.getItem("a5x_user");

      if (savedToken && savedUser) {
        setToken(savedToken);
        setUser(JSON.parse(savedUser));
      }
    } catch (err) {
      console.warn("⚠️ Auth parse error → clearing storage");
      localStorage.clear();
    }

    setLoading(false);
  }, []);

  // LOGIN
  function login(token, userObj) {
    setToken(token);
    setUser(userObj);

    localStorage.setItem("a5x_token", token);
    localStorage.setItem("a5x_user", JSON.stringify(userObj));
  }

  // LOGOUT
  function logout() {
    setToken("");
    setUser(null);
    localStorage.removeItem("a5x_token");
    localStorage.removeItem("a5x_user");
  }

  return (
    <AuthContext.Provider value={{ token, user, login, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
