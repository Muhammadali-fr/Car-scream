// src/SignUp.js
import React, { useState } from "react";
import { auth } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import Header from './Header';
import './styles.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { useNavigate } from "react-router-dom";


function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();
    try {
      // Sign in the user with Firebase Authentication
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in:", userCredential.user);
      // Redirect or take additional actions after successful login
      toast.success('Login successfully!');
    } catch (err) {
      console.error("Error during login.", err.message);
      setError(err.message); // Display the error message
      toast.error('Error during login.');
    }
  };

  return (
    <div className="login-container flex items-center bg-gray-900 justify-center min-h-screen">
      <Header />
      <form
        className="w-full max-w-md p-8 rounded-lg shadow-lg border backdrop-blur-md border-white"
        onSubmit={handleSubmit}
      >
        <h2 className="text-3xl font-semibold text-center text-white mb-6">Login</h2>
        <p className="text-center text-xl mb-5 text-white font-bold">Welcome back, Racer.</p>
        {error && (
          <div className="text-red-500 text-center mb-4">{error}</div>
        )}
        <div className="space-y-4">
          {/* Input for email */}
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {/* Input for password */}
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 mt-6 text-black bg-white rounded-lg hover:bg-gray-300 focus:outline-none"
        >
          Log In
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Login;
