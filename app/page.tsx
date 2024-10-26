"use client"

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
 
  const [error, setError] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Simulate a login API
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const data = await response.json();

      console.log('response data:', data);

      if (!response.ok) throw new Error('Login failed'); 

      const { token } = data;
      document.cookie = `token=${token}; path=/`;
      router.push('/home');

    } catch (error) {
      console.error("Request failed:", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
  <div className="bg-gray-400 p-8 rounded-lg shadow-lg w-full max-w-sm">
    <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Hungry Spider Project Management</h2>

    <form onSubmit={handleLogin}>
      <div className="mb-4">
        <label className="block text-gray-800 text-sm font-semibold mb-2" htmlFor="user">
          User
        </label>
        <input
          className="text-black w-full px-3 py-2 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
          type="text"
          id="user"
          value={username}
          placeholder="Enter your user ID"
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>

      <div className="mb-6">
            <label className="block text-gray-800 text-sm font-semibold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="text-black w-full px-3 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              value={password}
              type={showPassword ? 'text' : 'password'}
              id="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox text-cyan-600"
                onChange={togglePasswordVisibility}
                checked={showPassword}
              />
              <span className="ml-2 text-gray-800 text-sm">Show Password</span>
            </label>
          </div>

      <button
        type="submit"
        className="bg-gradient-to-br from-green-400 to-blue-600 border border-gray-700 hover:bg-gradient-to-bl text-white font-bold py-2 px-4 rounded-lg w-full"
      >
        Login
      </button>
    </form>
  </div>
</div>
  );
};

export default Login;



    /*
    setError(""); // Reset error state

    // Very basic validation
    if (!username || !password) {
      setError("\nPlease fill in all fields");
      return;
    }

    // Simulate API call **Replace with actual API call in a real scenario**
    if (username === "username" && password === "password") {
      // Redirect after successful login
    //  router.push("/dashboard");
    } else {
      setError("Invalid username or password");
    }
      */