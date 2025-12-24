import { Router, Routes, Route, BrowserRouter } from "react-router-dom"
import './App.css';

import AppLayout from './layouts/AppLayout'
import AuthLayout from './layouts/AuthLayout'

import Navbar from './components/Navbar';
import Authentication from "./pages/Authentication";
import Home from './pages/Home';
import RecipeDetails from './pages/RecipeDetails'
import SearchResult from "./pages/SearchResult";

function App() {
  return (
    <div className="App min-h-screen ">
      <BrowserRouter>
        <Routes>
          {/* AUTH ROUTES */}
          <Route element={<AuthLayout />}>
            <Route path="/auth/login" element={<Authentication />} />
            <Route path="/auth/signup" element={<Authentication />} />
          </Route>

          {/* APP ROUTES */}
          <Route element={<AppLayout />}>
              <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
