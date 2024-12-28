// src/SignUp.js
import React, { useState } from "react";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Header from './Header';
import './styles.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { useNavigate } from "react-router-dom";


function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();



  const handleSubmit = async (e) => {


    e.preventDefault();
    try {
      // Create a new user with Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("User signed up:", userCredential.user);
      toast.success('Signed up successfully!');
      setTimeout(() => {
        navigate('/');
      },3000)
    } catch (err) {
      console.error("Error during sign up:", err.message);
      setError(err.message); // Display the error message
      toast.error('Error during sign up');

    }
  };

  return (
    <div className="sign-up-container flex items-center bg-gray-900 justify-center min-h-screen">
      <Header />
      <form
        className="w-full max-w-md p-8 rounded-lg shadow-lg border backdrop-blur border-white"
        onSubmit={handleSubmit}
      >
        <h2 className="text-3xl font-semibold text-center text-white mb-6">Sign Up</h2>
        {error && (
          <div className="text-red-500 text-center mb-4 text-xl bg-red-50 p-3">{error}</div>
        )}
        <div className="space-y-4">
          {/* Input for name */}
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
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
          className="w-full py-3 mt-6 text-black bg-white rounded-lg hover:bg-red-800 hover:text-white focus:outline-none"
        >
          Sign Up
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default SignUp;
