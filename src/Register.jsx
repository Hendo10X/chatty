import React from 'react';
import './App.css'; 
import logo from './assets/Chatty.svg'

function App() {
  return (
    <div className="bg-gray-50 h-screen flex items-center justify-center"> 
      <div className="text-center max-w-sm"> 
      <div className="flex justify-center mb-1">
          <img src={logo} alt="Chat App Logo" className="w-20 h-20" /> 
        </div>
        <h1 className="text-4xl font-bold mb-6 font-apple">
          The simplest chat app <br />
          you'd ever get.
        </h1>
        <form className="w-64 mx-auto"> 
          <input 
            type="text" 
            placeholder="@username" 
            className="w-full py-2 px-4 rounded-md border border-gray-300 mb-4 focus:outline-none focus:border-green-500 font-inter" 
          />
          <input 
            type="password" 
            placeholder="password" 
            className="w-full py-2 px-4 rounded-md border border-gray-300 mb-6 focus:outline-none focus:border-green-500 font-inter" 
          />
          <button 
            type="submit" 
            className="bg-black hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-md w-full font-inter" 
          >
            Login
          </button>
        </form>
        <p className="mt-4 font-inter text-sm text-gray-500">
          Don't have an account? <a href="#" className="text-gray-500 hover:underline">Register</a>
        </p>
      </div>
    </div>
  );
}

export default App;