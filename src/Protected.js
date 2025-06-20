import { useNavigate } from 'react-router-dom';

export default function Protected({ usuario, onLogout }) {
  const navigate = useNavigate();

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-danger px-4">
        <span className="navbar-brand fw-bold">🚌 La Perla del Altomayo</span>
        <div className="ms-auto d-flex gap-2">
          <button className="btn btn-light btn-sm" onClick={() => navigate('/logs')}>
            Ver Logs
          </button>
          <button className="btn btn-outline-light btn-sm" onClick={onLogout}>
            Cerrar sesión
          </button>
        </div>
      </nav>

      {/* Contenido principal */}
      <div className="container mt-5">
        <div className="bg-white p-4 rounded shadow text-center border border-danger">
          <h2 className="text-danger">Bienvenido a LA PERLA DEL ALTOMAYO</h2>
          <hr />
          <div className="text-start">
            <p><strong>Nombres:</strong> {usuario?.nombres}</p>
            <p><strong>Apellidos:</strong> {usuario?.apellidos}</p>
            <p><strong>Correo:</strong> {usuario?.email}</p>
            <p><strong>Teléfono:</strong> {usuario?.telefono}</p>
            <p><strong>Rol:</strong> {usuario?.role}</p>
            <p><strong>ID de Usuario:</strong> {usuario?._id}</p>
          </div>

          <div className="mt-4 d-flex justify-content-center gap-3">
            <button className="btn btn-danger" onClick={() => navigate('/logs')}>
              Ver Logs
            </button>
            <button className="btn btn-outline-danger" onClick={onLogout}>
              Cerrar sesión
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
