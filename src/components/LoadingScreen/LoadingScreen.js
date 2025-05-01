import React from 'react';
import './style.css';

const LoadingScreen = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 flex items-center justify-center">
      <div className="loader"></div>
    </div>
  );
};

export default LoadingScreen;