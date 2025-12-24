import { Router, Routes, Route, BrowserRouter } from "react-router-dom"
import './App.css';

import AppLayout from './layouts/AppLayout'
import AuthLayout from './layouts/AuthLayout'

import Authentication from "./pages/Authentication";
import Home from './pages/Home';
import SearchResult from "./pages/SearchResult";
import ProtectedRoute from "./utils/ProtectedRoute";
import FavoritePage from "./pages/FavoritePage";

function App() {
  return (
    <div className="App min-h-screen ">
      <BrowserRouter>
        <Routes>
          {/* AUTH ROUTES */}
          <Route element={<AuthLayout />}>
            <Route path="/auth" element={<Authentication />} />
          </Route>

          {/* APP ROUTES */}
          <Route element={<AppLayout />}>
            <Route path="/" element=
              {<ProtectedRoute>
                <Home />
              </ProtectedRoute>
              } />
              <Route path="/search" element=
              {<ProtectedRoute>
                <SearchResult />
              </ProtectedRoute>
              } />
              <Route path="/favorite" element=
              {<ProtectedRoute>
                <FavoritePage />
              </ProtectedRoute>
              } />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
