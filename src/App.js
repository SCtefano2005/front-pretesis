import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import LoginForm from './LoginForm';
import Protected from './Protected';
import Logs from './Logs';

export default function App() {
  const [usuario, setUsuario] = useState(null);
  const [token, setToken] = useState('');

  const handleLogin = (userData, token) => {
    setUsuario(userData);
    setToken(token);
  };

  const handleLogout = () => {
    setUsuario(null);
    setToken('');
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            usuario && token ? (
              <Navigate to="/dashboard" />
            ) : (
              <LoginForm onLogin={handleLogin} />
            )
          }
        />
        <Route
          path="/dashboard"
          element={
            usuario && token ? (
              <Protected usuario={usuario} token={token} onLogout={handleLogout} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/logs"
          element={
            usuario && token ? (
              <Logs token={token} onLogout={handleLogout} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
    </Router>
  );
}
