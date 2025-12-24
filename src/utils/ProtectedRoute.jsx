import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  // While auth is loading, you can show nothing or a spinner
  if (loading) return null; 

  // If user not logged in → redirect to login page
  if (!user) return <Navigate to="/auth" />;

  // If user is logged in → render the children component
  return children;
}
