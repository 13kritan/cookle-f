import React, { useState } from "react";
import { Router, Routes, Route } from "react-router-dom";
import Logo from '../assets/logo.png'
import Login from "../components/Login";
import Register from "../components/Register";

export default function Authentication() {
  const [isLogin, setIsLogin] = useState(true);


  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 font-body">

      {/* LEFT SIDE – FOOD VISUAL */}
      <div className="hidden md:flex flex-col justify-center items-center bg-gradient-to-br from-green-600 to-emerald-500 text-white px-16">
        <img src={Logo} alt="logo" className="f" />
        <h1 className="text-4xl font-bold mb-4">Cook. Share. Enjoy.</h1>
        <p className="text-lg text-center opacity-90 mb-8">
          Discover delicious recipes from around the world and save your favorites.
        </p>

        <div className="grid grid-cols-3 gap-4 mt-8">
          <span className="text-5xl">🍕</span>
          <span className="text-5xl">🥗</span>
          <span className="text-5xl">🍰</span>
          <span className="text-5xl">🍜</span>
          <span className="text-5xl">🍔</span>
          <span className="text-5xl">🍳</span>
        </div>
      </div>

      {/* RIGHT SIDE – AUTH CARD */}
      <div>
        {isLogin ? <Login setIsLogin={setIsLogin} isLogin={isLogin} /> : <Register setIsLogin={setIsLogin} isLogin={isLogin} />}
        
      </div>

    </div>
  );
}
