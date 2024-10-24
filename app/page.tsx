"use client"

import { useState } from "react";
//import { useRouter } from "next/router";

const Login = () => {
 // const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Simulate a login API
  const handleLogin = async (e) => {
    e.preventDefault();
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
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
  <div className="bg-gray-200 p-8 rounded-lg shadow-lg w-full max-w-sm">
    <h2 className="text-3xl font-bold text-center mb-6 text-cyan-600">Hungry Spider Project Management</h2>

    <form>
      <div className="mb-4">
        <label className="block text-gray-600 text-sm font-semibold mb-2" htmlFor="user">
          User
        </label>
        <input
          className="text-black w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
          type="user"
          id="user"
          placeholder="Enter your user ID"
        />
      </div>

      <div className="mb-6">
            <label className="block text-gray-600 text-sm font-semibold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="text-black w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              type={showPassword ? 'text' : 'password'}
              id="password"
              placeholder="Enter your password"
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
              <span className="ml-2 text-gray-600 text-sm">Show Password</span>
            </label>
          </div>

      <button
        type="submit"
        className="bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl text-white font-bold py-2 px-4 rounded-lg w-full"
      >
        Login
      </button>
    </form>
  </div>
</div>
  );
};

export default Login;
