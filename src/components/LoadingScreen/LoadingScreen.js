import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css'

const LoadingScreen = () => {
  const navigate = useNavigate();
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setShowLoader(false);
      navigate('/home');
    }, 7000);

    return () => {
      clearTimeout(loadingTimer);
    };
  }, [navigate]);

  return (
    <div className={`fixed top-0 left-0 w-full h-full bg-gray-800 flex items-center justify-center transition-opacity ${showLoader ? 'opacity-100' : 'opacity-0'}`}>
      <div className="loader"></div>
    </div>
  );
};

export default LoadingScreen;