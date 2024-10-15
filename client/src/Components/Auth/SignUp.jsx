// src/components/Auth/SignUp.jsx
// import React from 'react';
import { SignUp } from "@clerk/clerk-react";

const SignUpPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <SignUp />
    </div>
  );
};

export default SignUpPage;