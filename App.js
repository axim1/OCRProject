import React, { useState } from 'react';
import Login from './components/Login';
import MainPage from './components/MainPage';
import FileUpload from './components/FileUpload';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState('login');

  const handleLogin = (username, password) => {
    // Placeholder for actual authentication logic
    if (username === 'demo' && password === 'password') {
      setIsLoggedIn(true);
      setCurrentPage('main');
    } else {
      alert('Invalid credentials');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPage('login');
  };

  const handleBack = () => {
    setCurrentPage('main');
  };

  let content;

  if (!isLoggedIn) {
    content = <Login onLogin={handleLogin} />;
  } else {
    switch (currentPage) {
      case 'main':
        content = <MainPage onLogout={handleLogout} />;
        break;
      case 'fileUpload':
        content = <FileUpload onBack={handleBack} />;
        break;
      default:
        content = <Login onLogin={handleLogin} />;
    }
  }

  return <div className="app">{content}</div>;
};

export default App;