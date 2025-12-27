import React, { useState } from "react";
import { Router, Routes, Route } from "react-router-dom";
import Logo from '../assets/logo.png'
import Login from "../components/Login";
import Register from "../components/Register";

export default function Authentication() {
  const [isLogin, setIsLogin] = useState(true);


  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row font-body">

      {/* LEFT SIDE – FOOD VISUAL */}
      <div className="p-4 pt-8  lg:w-1/2 flex flex-col justify-center items-center bg-gradient-to-br from-green-600 to-emerald-500 text-white px-16">
        <img src={Logo} alt="logo" className="w-2/3 xs:w-2/4" />
        <h1 className="text-4xl xs:text-2xl font-bold lg:mb-4 xs:mb-0">Cook. Share. Enjoy.</h1>
        <p className="text-lg xs:text-md text-center opacity-90 lg:mb-8 xs:mb-2">
          Discover delicious recipes from around the world and save your favorites.
        </p>

        <div className="grid grid-cols-3 gap-4 mt-8">
          <span className="text-2xl md:text-5xl">🍕</span>
          <span className="text-2xl md:text-5xl">🥗</span>
          <span className="text-2xl md:text-5xl">🍰</span>
          <span className="text-2xl md:text-5xl">🍜</span>
          <span className="text-2xl md:text-5xl">🍔</span>
          <span className="text-2xl md:text-5xl">🍳</span>
        </div>
      </div>

      {/* RIGHT SIDE – AUTH CARD */}
      <div className=" w-full lg:min-h-screen lg:w-1/2 flex items-center justify-center">
        {isLogin ? <Login setIsLogin={setIsLogin} isLogin={isLogin} /> : <Register setIsLogin={setIsLogin} isLogin={isLogin} />}
        
      </div>

    </div>
  );
}
