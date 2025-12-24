import { createContext, useContext, useEffect, useState } from "react";
import { getMe } from "../utils/authAPI";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  useEffect(() => {
    const loadUser = async () => {
      try {
        const { data } = await getMe();
        setUser(data);
      } catch {
        logout();
      } finally {
        setLoading(false);
      }
    };

    const token = localStorage.getItem("token");
    if (token) loadUser();
    else setLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, loading, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
