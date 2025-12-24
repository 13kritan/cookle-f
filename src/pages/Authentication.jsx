import React, { useState } from "react";

export default function Authentication() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 font-body">
      
      {/* LEFT SIDE – FOOD VISUAL */}
      <div className="hidden md:flex flex-col justify-center items-center bg-gradient-to-br from-green-600 to-emerald-500 text-white px-16">
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
      <div className="flex items-center justify-center bg-gray-100 px-6">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
          
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            {isLogin ? "Welcome Back 👋" : "Create Account 🍽️"}
          </h2>
          <p className="text-gray-500 mb-6">
            {isLogin
              ? "Login to continue exploring recipes"
              : "Sign up to save and share recipes"}
          </p>

          <form className="space-y-4">
            {!isLogin && (
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 outline-none"
              />
            )}

            <input
              type="email"
              placeholder="Email address"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 outline-none"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 outline-none"
            />

            {!isLogin && (
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 outline-none"
              />
            )}

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition"
            >
              {isLogin ? "Login" : "Sign Up"}
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-600">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-green-600 font-semibold ml-1 hover:underline"
            >
              {isLogin ? "Sign up" : "Login"}
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
