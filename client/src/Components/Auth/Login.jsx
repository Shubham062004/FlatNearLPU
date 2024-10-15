// src/components/Auth/Login.jsx
// import React from 'react';
import { SignIn } from "@clerk/clerk-react";

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <SignIn />
    </div>
  );
};

export default LoginPage;