import { useState } from 'react';
import axios from 'axios';

export default function LoginForm({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/auth/login', {
        email,
        password,
      });
      onLogin(res.data.user, res.data.token);
    } catch (error) {
      alert(error.response?.data?.message || 'Error al iniciar sesión');
    }
  };

  return (
    <div style={{ display: 'flex', height: '100vh', fontFamily: 'sans-serif' }}>
      {/* Panel Izquierdo: Imagen */}
      <div
        style={{
          flex: 1,
          backgroundImage: "url('/bus.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Panel Derecho: Formulario */}
      <div
        style={{
          flex: 1,
          backgroundColor: '#fffdfb',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '40px',
        }}
      >
        <div
          style={{
            maxWidth: '400px',
            margin: '0 auto',
            border: '1px solid #dc3545',
            borderRadius: '10px',
            padding: '30px',
            boxShadow: '0 0 10px rgba(0,0,0,0.1)',
            backgroundColor: 'white',
            textAlign: 'center',
          }}
        >
          {/* Logo */}
          <img
            src="/logo.png"
            alt="La Perla del Altomayo"
            style={{ width: '100px', marginBottom: '20px' }}
          />
          <h5 className="text-muted mb-2">Sistema de Monitoreo</h5>

          <h2 className="text-danger mb-4" style={{ fontSize: '18px' }}>
            INICIO DE SESIÓN DE LA ADMINISTRACIÓN DE LA PERLA DEL ALTOMAYO
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3 text-start">
              <label className="form-label"><strong>Correo:</strong></label>
              <input
                type="email"
                className="form-control"
                value={email}
                placeholder="ejemplo@altomayo.com"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group mb-4 text-start">
              <label className="form-label"><strong>Contraseña:</strong></label>
              <input
                type="password"
                className="form-control"
                value={password}
                placeholder="********"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn btn-danger w-100">
              Acceder al Sistema
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

